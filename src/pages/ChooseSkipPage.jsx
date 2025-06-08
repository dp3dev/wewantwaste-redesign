import './ChooseSkipPage.css';
import React, { useEffect, useState, useRef } from "react";

export default function ChooseSkipPage() {
  const staticSkips = [
    {
      id: 1,
      name: "4 Yard Skip",
      price: 211,
      volume: 4,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
    },
    {
      id: 2,
      name: "5 Yard Skip",
      price: 241,
      volume: 5,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
    },
    {
      id: 3,
      name: "6 Yard Skip",
      price: 264,
      volume: 6,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg"
    },
    {
      id: 4,
      name: "8 Yard Skip",
      price: 295,
      volume: 8,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg"
    },
    {
      id: 5,
      name: "10 Yard Skip",
      price: 356,
      volume: 10,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg"
    },
    {
      id: 6,
      name: "12 Yard Skip",
      price: 390,
      volume: 12,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg"
    },
    {
      id: 7,
      name: "14 Yard Skip",
      price: 434,
      volume: 14,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg"
    },
    {
      id: 8,
      name: "16 Yard Skip",
      price: 510,
      volume: 16,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
    },
    {
      id: 9,
      name: "20 Yard Skip",
      price: 802,
      volume: 20,
      image: "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg"
    },
  ];

  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const cardRefs = useRef({});

  const skipDetails = {
    1: "Ideal for small home cleanouts and garden waste. No permit required.",
    2: "Slightly larger, fits small renovation debris. May require permit.",
    3: "Suitable for medium renovation projects and mixed waste.",
    4: "Popular choice for builders. Handles larger debris.",
    5: "Good for bulky waste and minor demolition material.",
    6: "Handles mixed construction and domestic waste.",
    7: "Large capacity for site cleanups. Commercial use friendly.",
    8: "Fits large-scale construction or shop clear-outs.",
    9: "Very large, ideal for industrial use or major projects.",
  };

  useEffect(() => {
    setSkips(staticSkips);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading skips...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{
      padding: "40px 20px",
      background: "linear-gradient(180deg, #e6f4ea 0%, #fdfdfd 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        marginBottom: "30px",
        fontFamily: "Arial, sans-serif",
        width: "100%",
        padding: "0 20px",
        boxSizing: "border-box",
        maxWidth: "1280px",
        margin: "0 auto"
      }}>
        {["Postcode", "Waste Type", "Select Skip", "Permit Check", "Choose Date", "Payment"].map((step, index) => {
          const isActive = index === 2;
          return (
            <div key={step} style={{
              fontSize: "14px",
              padding: "6px 12px",
              borderRadius: "20px",
              backgroundColor: isActive ? "#28a745" : "#e0e0e0",
              color: isActive ? "#fff" : "#333",
              fontWeight: isActive ? "600" : "400",
              transition: "all 0.3s ease",
              flex: 1,
              textAlign: "center",
              minWidth: "140px",
            }}>
              {step}
            </div>
          );
        })}
      </div>
      <h1 style={{
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "32px",
        fontWeight: "600",
        color: "#106c2d",
        marginBottom: "10px",
        letterSpacing: "0.2px",
        textTransform: "capitalize"
      }}>
        Select the Right Skip for Your Waste
      </h1>
      <p style={{ 
        textAlign: "center", 
        marginBottom: "10px", 
        color: "#666",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        letterSpacing: "0.2px",
      }}>
        Select the skip size that best suits your needs
      </p>
      <div className="skip-grid">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className="skip-card"
            ref={(el) => (cardRefs.current[skip.id] = el)}
            onClick={() => {
              setSelectedSkipId(skip.id === selectedSkipId ? null : skip.id);
            }}
            style={{
              border:
                skip.id === selectedSkipId
                  ? "3px solid #28a745"
                  : "1px solid #eee",
              borderRadius: "12px",
              padding: "16px",
              width: "calc(100% - 18px)",
              maxWidth: "100%",
              minWidth: "260px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <h2 style={{
              marginTop: 0,
              fontSize: "20px",
              marginBottom: "10px",
              color: "#333",
            }}>{skip.name}</h2>
            <div style={{ position: "relative", width: "100%", height: "180px", marginBottom: "10px" }}>
              <img
                src={skip.image}
                alt={skip.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <span style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#28a745",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold"
              }}>
                {skip.volume} Yards
              </span>
            </div>
            <p style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1c7c35",
              marginBottom: "6px",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.3px",
            }}>
              £{typeof skip.price === "number" ? skip.price.toFixed(2) : "N/A"} — 14-day hire
            </p>
            <p style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#555",
              margin: "4px 0",
              fontFamily: "Arial, sans-serif",
            }}>
              Volume: {skip.volume} yd³
            </p>
            {selectedSkipId === skip.id && (
              <div style={{
                backgroundColor: "#e7f9e8",
                borderRadius: "10px",
                padding: "14px",
                marginTop: "12px",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#2a2a2a",
                textAlign: "center",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.05)",
              }}>
                {skipDetails[skip.id]}
              </div>
            )}
            <button
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onClick={(e) => {
                e.stopPropagation();
                alert(`You selected: ${skip.name}`);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#219d52";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#28a745";
              }}
            >
              Select This Skip →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}