import {forwardRef} from "react";

const SearchInput = forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            className="border-1"
            placeholder="Looking for something?"
            {...props}
        />
    )
})
export default SearchInput;

