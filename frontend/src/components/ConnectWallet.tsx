import { useNavigate } from "react-router-dom";
import { useMainContext } from "../context/MainContext";

const ConnectWallet = () => {
  const { connectWallet } = useMainContext();

  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    connectWallet();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-[600px] bg-white p-2">
      <div className="p-6 sm:p-8 border rounded-3xl shadow-lg bg-white max-w-md">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 py-4">
            <img
              src="/logo.svg"
              alt="Logo Image"
              className="w-12 h-12
              rounded-full"
            />
            <h1 className="text-2xl font-semibold text-gray-900">Faitto.</h1>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Connect your wallet to start using our platform. Ensure your
            MetaMask is installed and ready to go.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => handleConnectWallet()}
            className="w-full py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-800 hover:to-green-800 focus:outline-none "
          >
            Connect Wallet
          </button>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Make sure you have MetaMask installed in your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
