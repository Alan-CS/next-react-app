export default function SearchButton({ onClick }) {
    return (
        <button className="btn-primary-block mb-2"
                onClick={onClick}
        >
            Search
        </button>
    );
}