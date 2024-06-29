import { useRef, forwardRef, useImperativeHandle, InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    // Add any other custom props here
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
    const { label, ...rest } = props;

    return (
        <div>
            {label && <label className="text-sm block mt-4 mb-2">{label}</label>}
            <input
                ref={ref}
                className="border-1"
                placeholder="Looking for something?"
                {...rest}
            />
        </div>
    );
});
// Without below line you get the below error. displayName is used by developer tools.
// Error:(8, 21) ESLint: Component definition is missing display name (react/display-name)
SearchInput.displayName = "SearchInput";

// Refer To: https://react.dev/learn/manipulating-the-dom-with-refs#exposing-a-subset-of-the-api-with-an-imperative-handle
export const ImperativeSearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
    const { label, ...rest } = props;
    const realInputRef = useRef<HTMLInputElement>(null);

    // useImperativeHandle() hook customizes the exposed imperative methods (focus() in this case) for the ref.
    // @ts-ignore
    useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
            if (realInputRef.current) {
                realInputRef.current.focus();
            }
        },
    }));

    return (
        <div>
            {label && <label className="text-sm block mt-4 mb-2">{label}</label>}
            <input
                ref={realInputRef}
                className="border-1"
                placeholder="Looking for something?"
                {...rest}
            />
        </div>
    );
});
ImperativeSearchInput.displayName = "ImperativeSearchInput";