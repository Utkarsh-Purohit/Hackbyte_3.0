// src/components/FileUpload.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { summarizeText } from '../services/gemini';

const FileUpload = ({ patientId }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 10 * 1024 * 1024;

    if (!validTypes.includes(selectedFile.type)) {
      setError('Only JPG, PNG, and PDF files are allowed');
      return;
    }

    if (selectedFile.size > maxSize) {
      setError('File size exceeds 10MB limit');
      return;
    }

    setFile(selectedFile);
    setError(null);
    setUploadResult(null);
  };

  const handleUpload = async () => {
    if (!file || isUploading) return;

    setIsUploading(true);
    setError(null);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('report', file);
    formData.append('patientId', patientId || 'demo123');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/reports/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            setUploadProgress(percentCompleted);
          },
          timeout: 30000,
        }
      );

      const extractedText = response.data.report?.extractedText || '';
      const summary = await summarizeText(extractedText);

      setUploadResult({
        success: true,
        message: response.data.message || 'File uploaded successfully',
        textLength: response.data.report?.textLength || 0,
        reportId: response.data.report?.id,
        summary: summary,
      });

    } catch (err) {
      let errorMessage = 'Upload failed';

      if (err.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out';
      } else if (err.response) {
        errorMessage = err.response.data?.error || `Server error (${err.response.status})`;
      } else if (err.request) {
        errorMessage = 'No response from server';
      } else {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setUploadResult(null);
    setError(null);
    setShowModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Medical Report</h2>

      <div className="mb-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 border border-gray-300"
        >
          {file ? file.name : 'Select File'}
        </button>
      </div>

      {file && (
        <div className="mb-4 p-3 bg-gray-50 rounded-md flex justify-between items-center">
          <span className="truncate">{file.name}</span>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-3">
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </span>
            <button
              onClick={resetForm}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || isUploading}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          !file || isUploading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isUploading ? `Uploading... ${uploadProgress}%` : 'Upload Report'}
      </button>

      {isUploading && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md">
          {error}
        </div>
      )}

      {uploadResult?.success && (
        <div className="mt-4 p-3 bg-green-50 text-green-600 rounded-md">
          <p>{uploadResult.message}</p>
          <p className="mt-1 text-sm">
            Extracted {uploadResult.textLength} characters
          </p>
          {uploadResult.reportId && (
            <p className="mt-1 text-xs">Report ID: {uploadResult.reportId}</p>
          )}

          {uploadResult.summary && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 py-1 px-3 bg-indigo-100 text-indigo-700 text-sm rounded hover:bg-indigo-200"
            >
              View Analysis
            </button>
          )}
        </div>
      )}

     {/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative p-6 sm:p-8">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
      >
        &times;
      </button>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-blue-700">🧠 AI Report Analysis</h3>
        <p className="text-sm text-gray-500 mt-1">Here’s what the AI found from your uploaded report:</p>
      </div>
      <div className="text-sm text-gray-800 leading-relaxed max-h-80 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200 whitespace-pre-wrap">
        {uploadResult.summary}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => setShowModal(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md text-sm font-medium transition-all duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default FileUpload;
