function BrevoForm({onClose}) {

    const handleOutsideClick = (event) => {
        if (event.target.id === "container") {
          onClose();
        }
      };
  return (
    <>
      <div
        id="container"
        onClick={handleOutsideClick}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25 "
      >
        <iframe
        className="rounded-2xl m-10"
          width="540"
          height="450"
          src="https://3fbef39b.sibforms.com/serve/MUIFAHKSyahiv78g2zzAlso3g1QcNWCZHt_8DnsYHrJ3Rv4hh4aO44rLSDEn8pSi9RgmjayfMc0lOcP4gPmUuAtaK56Nhrj0uGm0j11mzxejEwxc1cG-1r5hm6Hb2yxa5NqyfoJBzEIPsvmQgtasrqHtFDUOfUpgT2uKRfqL5YLCNv2YC7153IJsVWl-uq0mtT8a7ncOY6f7qWY7"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen        
        ></iframe>
      </div>
    </>
  );
}

export default BrevoForm;
