// https://react.dev/learn/manipulating-the-dom-with-refs#focus-the-search-field-with-separate-components
// https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes

import React, {useRef} from "react";
import SearchButton from "./SearchButton";
import { SearchInput, ImperativeSearchInput } from "./SearchInput";

const FocusingInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputRefImperative = useRef<HTMLInputElement | null>(null);

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
            <nav className="mt-8">
                <SearchButton
                    onClick={() => {
                        if (inputRefImperative.current) {
                            inputRefImperative.current.focus();
                        }
                    }}
                />
            </nav>
            <ImperativeSearchInput
                id="searchI"
                name="searchI"
                label="Input below uses ImperativeHandle"
                ref={inputRefImperative}
            />
        </>
    );
};

export default FocusingInput;
