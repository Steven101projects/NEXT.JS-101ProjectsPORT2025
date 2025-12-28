




export default function TitleHeader() {
  return (
    <div className="portfolioTitleHeader flex items-center absolute right-[2vw] mt-2">
      <span className="portfolioTitleName text-3xl gap-2">
        (Nico Castro’s)
      </span>

      <span className="portfolioTitleMain text-9xl">
        1O1
      </span>

      <span
        className="portfolioTitleSuffix text-7xl mt-5"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        .projects
      </span>
    </div>
  );
}
