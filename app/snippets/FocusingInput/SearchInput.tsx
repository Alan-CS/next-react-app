import { forwardRef, InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    // Add any other custom props here
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
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

export default SearchInput;
