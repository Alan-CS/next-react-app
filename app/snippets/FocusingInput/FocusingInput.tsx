// https://react.dev/learn/manipulating-the-dom-with-refs#focus-the-search-field-with-separate-components
// https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import {useRef} from "react";

export default function FocusingInput() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <nav>
                <SearchButton
                    onClick={() : void => {
                        inputRef.current.focus()
                }} />
            </nav>
            <SearchInput ref={inputRef}/>
        </>
    );
}
