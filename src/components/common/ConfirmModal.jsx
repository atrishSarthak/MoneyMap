import React from "react";
import AppModal from "./AppModal";

export default function ConfirmModal({ open, onClose, onConfirm, title, message, confirmText = "Delete", cancelText = "Cancel", loading }) {
  return (
    <AppModal open={open} onClose={onClose} width="max-w-sm">
      <div className="flex flex-col gap-4 p-4">
        <div className="text-lg font-bold text-blue-900">{title}</div>
        <div className="text-blue-700 text-sm">{message}</div>
        <div className="flex gap-2 justify-end mt-4">
          <button
            className="px-4 py-2 rounded-lg bg-blue-50 text-blue-900 font-semibold hover:bg-blue-100"
            onClick={onClose}
            disabled={loading}
          >{cancelText}</button>
          <button
            className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 shadow"
            onClick={onConfirm}
            disabled={loading}
          >{loading ? "Deleting..." : confirmText}</button>
        </div>
      </div>
    </AppModal>
  );
}
