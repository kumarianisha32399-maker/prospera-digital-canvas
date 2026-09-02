export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`text-2xl font-semibold sm:text-3xl lg:text-4xl ${light ? "text-navy-foreground" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-sm leading-relaxed sm:text-base ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
