import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectPopupProps {
  options: Option[];
  selectedValues: Option[];
  onChange: (selected: Option[]) => void;
  label: string;
  placeholder?: string;
  error?: string;
}

export function MultiSelectPopup({
  options,
  selectedValues,
  onChange,
  label,
  placeholder = "Cliquez pour sélectionner",
  error,
}: MultiSelectPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<Option[]>(selectedValues);

  const handleToggle = (option: Option) => {
    const isSelected = tempSelected.some((item) => item.value === option.value);
    if (isSelected) {
      setTempSelected(
        tempSelected.filter((item) => item.value !== option.value),
      );
    } else {
      setTempSelected([...tempSelected, option]);
    }
  };

  const handleConfirm = () => {
    onChange(tempSelected);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempSelected(selectedValues);
    setIsOpen(false);
  };

  const handleRemoveBadge = (option: Option) => {
    const updated = selectedValues.filter(
      (item) => item.value !== option.value,
    );
    onChange(updated);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      {/* Display Selected Items as Badges */}
      <div
        onClick={() => setIsOpen(true)}
        className={`min-h-[48px] w-full px-4 py-2 border rounded-lg cursor-pointer transition-all ${
          error ? "border-red-500" : "border-gray-300 hover:border-green-500"
        } focus:ring-2 focus:ring-green-500`}
      >
        {selectedValues.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedValues.map((option) => (
              <span
                key={option.value}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
              >
                {option.label}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveBadge(option);
                  }}
                  className="hover:bg-green-200 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">{label}</h3>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Options List */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {options.map((option) => {
                  const isSelected = tempSelected.some(
                    (item) => item.value === option.value,
                  );
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleToggle(option)}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all text-left ${
                        isSelected
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-green-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-medium text-gray-900">
                        {option.label}
                      </span>
                      {isSelected && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <span className="text-sm text-gray-600">
                {tempSelected.length} sélectionné(s)
              </span>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Annuler
                </Button>
                <Button
                  type="button"
                  onClick={handleConfirm}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Valider
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
