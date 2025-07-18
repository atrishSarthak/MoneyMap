import React from "react";
import { FiCreditCard, FiExternalLink, FiX } from "react-icons/fi";
import NeumorphicButton from "../../ui/NeumorphicButton";
import AppModal from "../../common/AppModal";

const BANKS = [
  {
    name: "HDFC Bank",
    url: "https://netbanking.hdfcbank.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/HDFC_Bank_Logo.svg"
  },
  {
    name: "ICICI Bank",
    url: "https://www.icicibank.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/ICICI_Bank_Logo.svg"
  },
  {
    name: "Axis Bank",
    url: "https://www.axisbank.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Axis_Bank_logo.svg"
  },
  {
    name: "SBI",
    url: "https://retail.onlinesbi.sbi/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/State_Bank_of_India_logo.svg"
  },
  {
    name: "Canara Bank",
    url: "https://netbanking.canarabank.in/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Canara_Bank_logo.svg"
  },
  {
    name: "Paytm",
    url: "https://paytm.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png"
  },
  {
    name: "Google Pay",
    url: "https://pay.google.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_Pay_Logo.svg"
  }
];

export default function BankingLinksModal({ open, onClose }) {
  return (
    <AppModal open={open} onClose={onClose} width="max-w-md">
      <div className="flex flex-col items-center w-full p-6">
        <div className="flex items-center gap-2 text-lg font-bold text-blue-800 mb-2 mt-4 ml-4 relative">
          <FiCreditCard /> Banking & Payment Links
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-0 top-0 p-1 text-blue-400 hover:text-blue-700 opacity-70 hover:opacity-100 focus:outline-none"
          >
            <FiX size={20} />
          </button>
        </div>
        <table className="w-full mb-4">
          <tbody>
            {BANKS.map(bank => (
              <tr key={bank.name} className="hover:bg-blue-50 transition">
                <td className="py-2 px-2 w-12">
                  <img src={bank.logo} alt={bank.name + ' logo'} className="h-8 w-8 object-contain rounded" />
                </td>
                <td className="py-2 px-2 text-blue-900 font-semibold">{bank.name}</td>
                <td className="py-2 px-2 text-right">
                  <a href={bank.url} target="_blank" rel="noopener noreferrer">
                    <NeumorphicButton variant="primary" className="px-4 py-2 text-sm">Visit</NeumorphicButton>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppModal>
  );
}
