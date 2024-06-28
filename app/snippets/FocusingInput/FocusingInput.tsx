// https://react.dev/learn/manipulating-the-dom-with-refs#focus-the-search-field-with-separate-components
// https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes

import { useRef } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const FocusingInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <nav>
                <SearchButton
                    onClick={() => {
                        if (inputRef.current) {
                            inputRef.current.focus();
                        }
                    }}
                />
            </nav>
            <SearchInput
                id="search"
                name="search"
                label="Input below uses forwardRef"
                ref={inputRef}
            />
        </>
    );
};

export default FocusingInput;
