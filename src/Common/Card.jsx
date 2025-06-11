export default function Card({ place }) {
    if (!place) return null;

    const cardStyle = {
    width:"20%",
    border: "1px solid #ddd",
    borderRadius: "16px",
    padding: "16px",
    margin: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    };

    const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px"
    };

    const categoryStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "4px"
    };

    const addressStyle = {
    fontSize: "13px",
    color: "#777"
    };

    return (
    <div style={cardStyle}>
        <h3 style={titleStyle}>{place.name_en}</h3>
        <p style={categoryStyle}>{place.category}</p>
        <p style={addressStyle}>{place.address}</p>
    </div>
    );
}
