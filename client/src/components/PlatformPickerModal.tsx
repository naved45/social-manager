/*
import {CheclCircleIcon, ExternalLinkIcon, XIcon} from "lucide-react"
import {PLATFORM } from "../assets/assets;

interface PlatformPickerModalProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}

const PlatformPickerModal = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-100">
        {/* Header *
        <div className="flex items-center justify-between px-6 py-4 shadow">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Platform list *
        <div className="p-6 flex flex-col gap-2">
          {PLATFORMS.map((p) => {
            const isConnected = connectedIds.includes(p.id);
            const isConnecting = connecting === p.id;

            return (
              <button
                key={p.id}
                onClick={() => onConnect(p.id)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {/* Icon *
                <div className="p-2">
                  <p.icon
                    className={`size-5 ${
                      isConnected ? "text-red-600" : "text-slate-500"
                    }`}
                  />
                </div>

                {/* Label *
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm ${
                      isConnected ? "text-red-700" : "text-slate-800"
                    }`}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {isConnected ? "Already connected" : p.description}
                  </div>
                </div>

                {/* Status *
                {isConnected && (
                  <CheckCircle className="size-4 text-red-500 shrink-0" />
                )}
                {isConnecting && (
                  <div className="size-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0" />
                )}
                {!isConnected && !isConnecting && (
                  <ExternalLink className="size-3.5 text-slate-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModal;


import { X, CheckCircle, ExternalLink } from "lucide-react";
import { PLATFORMS } from "../assets/assets";

interface PlatformPickerModalProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}

const PlatformPickerModal = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-100">
        {/* Header *
        <div className="flex items-center justify-between px-6 py-4 shadow">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Platform list *
        <div className="p-6 flex flex-col gap-2">
          {PLATFORMS.map((p) => {
            const isConnected = connectedIds.includes(p.id);
            const isConnecting = connecting === p.id;

            return (
              <button
                key={p.id}
                onClick={() => onConnect(p.id)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {/* Icon *
                <div className="p-2">
                  <p.icon
                    className={`size-5 ${
                      isConnected ? "text-red-600" : "text-slate-500"
                    }`}
                  />
                </div>

                {/* Label *
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm ${
                      isConnected ? "text-red-700" : "text-slate-800"
                    }`}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {isConnected ? "Already connected" : p.description}
                  </div>
                </div>

                {/* Status *
                {isConnected && (
                  <CheckCircle className="size-4 text-red-500 shrink-0" />
                )}
                {isConnecting && (
                  <div className="size-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0" />
                )}
                {!isConnected && !isConnecting && (
                  <ExternalLink className="size-3.5 text-slate-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModal;
*/

import { X, CircleCheck, ExternalLink } from "lucide-react";
import { PLATFORMS } from "../assets/assets";

interface PlatformPickerModalProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}

const PlatformPickerModal = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-slate-900">
            Connect Platform
          </h3>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Platform List */}
        <div className="p-6 flex flex-col gap-2">
          {PLATFORMS.map((platform) => {
            const isConnected = connectedIds.includes(platform.id);
            const isConnecting = connecting === platform.id;

            return (
              <button
                key={platform.id}
                disabled={isConnected || isConnecting}
                onClick={() => onConnect(platform.id)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all disabled:cursor-not-allowed"
              >
                {/* Platform Icon */}
                <div className="p-2 rounded-lg bg-slate-50">
                  <platform.icon
                    className={`size-5 ${
                      isConnected ? "text-red-500" : "text-slate-600"
                    }`}
                  />
                </div>

                {/* Platform Info */}
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-slate-900">
                    {platform.name}
                  </div>

                  <div className="text-xs text-slate-500">
                    {isConnected ? "Already connected" : platform.description}
                  </div>
                </div>

                {/* Status */}
                {isConnected ? (
                  <CircleCheck className="size-4 text-green-500 shrink-0" />
                ) : isConnecting ? (
                  <div className="size-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin shrink-0" />
                ) : (
                  <ExternalLink className="size-4 text-slate-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModal;
