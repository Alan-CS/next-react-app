import React from "react";

interface SearchButtonProps {
    onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
    return (
        <button
            className="btn-primary-block mb-2"
            onClick={onClick}
        >
            Click to focus input
        </button>
    );
};

export default SearchButton;
