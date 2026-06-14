/*import { useState, useEffect } from "react";
import { PLATFORMS, dummyAccountsData } from "../assets/assets";
import { Plus } from "lucide-react";
import AccountList from "../components/AccountList";
import PlatformPickerModal from "../components/PlatformPickerModal";

const Accounts = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showPlatformPicker, setShowPlatformPicker] = useState(false);

  // Fetch dummy accounts
  const fetchAccounts = async (
    isSync = false,
    platform?: string | null,
    successMsg?: string,
  ) => {
    setAccounts(dummyAccountsData);
    console.log(isSync, platform, successMsg);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Handle connecting a new platform
  const handleConnect = async (platformId: string) => {
    setConnecting(platformId);
    setTimeout(() => {
      setConnecting(null);
      setAccounts((prev) => [...prev, dummyAccountsData[0]]);
      setShowPlatformPicker(false);
    }, 1000);
  };

  // Handle disconnecting an account
  const handleDisconnect = async (accountId: string) => {
    setAccounts(accounts.filter((a) => a.id !== accountId));
  };

  const connectedIds = accounts.map((a) => a.platform);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header *
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div>
          <h2 className="text-xl text-slate-900">Connected Accounts</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {accounts.length} of {PLATFORMS.length} platforms connected
          </p>
        </div>
        <button
          onClick={() => setShowPlatformPicker(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all w-full sm:w-auto justify-center"
        >
          <Plus className="size-4" /> Connect Account
        </button>
      </div>
      {/* Platform picker modal *
      {/* {showPlatformPicker && (
  <PlatformPickerModal
    connectedIds={connectedIds}
    connecting={connecting}
    onClose={() => setShowPlatformPicker(false)}
    onConnect={handleConnect}
  />
)} 

      /* Connected accounts list *
      <AccountList
        accounts={accounts}
        onDisconnect={handleDisconnect}
        showPlatformPicker={showPlatformPicker}
        connectedIds={connectedIds}
        connecting={connecting}
        handleConnect={handleConnect}
        setShowPlatformPicker={setShowPlatformPicker}
      />
    </div>
  );
};

export default Accounts;

*/

import { useState, useEffect } from "react";
import { PLATFORMS, dummyAccountsData } from "../assets/assets";
import { Plus } from "lucide-react";
import AccountList from "../components/AccountList";
import PlatformPickerModal from "../components/PlatformPickerModal";

const Accounts = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showPlatformPicker, setShowPlatformPicker] = useState(false);

  const fetchAccounts = async () => {
    setAccounts(dummyAccountsData);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleConnect = async (platformId: string) => {
    setConnecting(platformId);

    setTimeout(() => {
      setConnecting(null);

      const newAccount = {
        ...dummyAccountsData[0],
        id: Date.now().toString(),
        platform: platformId,
      };

      setAccounts((prev) => [...prev, newAccount]);
      setShowPlatformPicker(false);
    }, 1000);
  };

  const handleDisconnect = async (accountId: string) => {
    setAccounts((prev) => prev.filter((a) => a.id !== accountId));
  };

  const connectedIds = accounts.map((a) => a.platform);

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div>
          <h2 className="text-xl text-slate-900">Connected Accounts</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {accounts.length} of {PLATFORMS.length} platforms connected
          </p>
        </div>

        <button
          onClick={() => setShowPlatformPicker(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all w-full sm:w-auto justify-center"
        >
          <Plus className="size-4" />
          Connect Account
        </button>
      </div>

      {showPlatformPicker && (
        <PlatformPickerModal
          connectedIds={connectedIds}
          connecting={connecting}
          onClose={() => setShowPlatformPicker(false)}
          onConnect={handleConnect}
        />
      )}

      <AccountList
        accounts={accounts}
        onDisconnect={handleDisconnect}
        showPlatformPicker={showPlatformPicker}
        connectedIds={connectedIds}
        connecting={connecting}
        handleConnect={handleConnect}
        setShowPlatformPicker={setShowPlatformPicker}
      />
    </div>
  );
};

export default Accounts;
