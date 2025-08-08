const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 border-0 shadow-lg rounded-4 text-light bg-gradient"
      style={{
        background: 'linear-gradient(135deg, #1f1c2c, #928DAB)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={src || "https://via.placeholder.com/300x200?text=No+Image"}
        className="card-img-top"
        alt="news"
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem"
        }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-danger">{title?.slice(0, 60)}</h5>
         <p className="card-text" style={{ fontSize: "0.9rem", color: "black" }}>
          {description ? description.slice(0, 100) : "No description available."}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light  btn-sm mt-2"
        >
          <button style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>
  Read More
</button>

        </a>

        
      </div>
    </div>
  );
};

export default NewsItem;
