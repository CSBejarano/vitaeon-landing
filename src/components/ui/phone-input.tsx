'use client';

import PhoneInputWithCountry from 'react-phone-number-input';
import type { E164Number } from 'libphonenumber-js';
import type { CountryCode } from 'libphonenumber-js';
import { cn } from '@/lib/utils';
import 'react-phone-number-input/style.css';

export interface PhoneInputProps {
  value?: E164Number;
  onChange: (value: E164Number | undefined) => void;
  defaultCountry?: CountryCode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

/**
 * PhoneInput - International phone number input with country selector
 *
 * Features:
 * - Country code dropdown with flags
 * - E.164 format output (e.g., +34612345678)
 * - Auto-validation with libphonenumber-js
 * - Styled for Vitaeon theme (navy, beige, cream)
 *
 * @example
 * <PhoneInput
 *   value={phone}
 *   onChange={setPhone}
 *   defaultCountry="ES"
 *   placeholder="612 345 678"
 * />
 */
export function PhoneInput({
  value,
  onChange,
  defaultCountry = 'ES',
  placeholder = '612 345 678',
  required = false,
  disabled = false,
  className,
  id,
  name,
}: PhoneInputProps) {
  return (
    <div className={cn('phone-input-container', className)}>
      <PhoneInputWithCountry
        international
        countryCallingCodeEditable={false}
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        name={name}
      />
        {/* Custom styles for Vitaeon theme */}
        <style jsx global>{`
          .phone-input-container .PhoneInput {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .phone-input-container .PhoneInputCountry {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.75rem;
            background: rgba(30, 58, 95, 0.5);
            border: 1px solid rgba(212, 197, 181, 0.2);
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .phone-input-container .PhoneInputCountry:hover {
            border-color: rgba(212, 197, 181, 0.4);
          }

          .phone-input-container .PhoneInputCountry:focus-within {
            border-color: rgba(212, 197, 181, 0.5);
            outline: none;
            ring: 2px;
            ring-color: rgba(212, 197, 181, 0.2);
          }

          .phone-input-container .PhoneInputCountryIcon {
            width: 1.5rem;
            height: 1rem;
            border-radius: 2px;
            overflow: hidden;
          }

          .phone-input-container .PhoneInputCountryIcon--border {
            box-shadow: 0 0 0 1px rgba(212, 197, 181, 0.2);
          }

          .phone-input-container .PhoneInputCountryIconImg {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .phone-input-container .PhoneInputCountrySelectArrow {
            margin-left: 0.5rem;
            width: 0.4rem;
            height: 0.4rem;
            border-style: solid;
            border-color: rgba(245, 240, 232, 0.6);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }

          .phone-input-container .PhoneInputCountrySelect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            z-index: 1;
          }

          .phone-input-container .PhoneInputCountrySelect option {
            background: #1e3a5f;
            color: #f5f0e8;
          }

          .phone-input-container .PhoneInputInput {
            flex: 1;
            height: 3rem;
            padding: 0 1rem;
            background: rgba(30, 58, 95, 0.5);
            border: 1px solid rgba(212, 197, 181, 0.2);
            border-radius: 0.5rem;
            color: #f5f0e8;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .phone-input-container .PhoneInputInput::placeholder {
            color: rgba(245, 240, 232, 0.4);
          }

          .phone-input-container .PhoneInputInput:focus {
            border-color: rgba(212, 197, 181, 0.5);
            outline: none;
            box-shadow: 0 0 0 2px rgba(212, 197, 181, 0.2);
          }

          .phone-input-container .PhoneInputInput:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* Country code display */
          .phone-input-container .PhoneInputCountryIconUnicode {
            font-size: 1.25rem;
          }
        `}</style>
    </div>
  );
}

export default PhoneInput;
