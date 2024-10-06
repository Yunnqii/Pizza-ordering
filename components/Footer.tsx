import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm text-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">
            OH YES, WE DID. WELL BAKED SLICE OF PIZZA.
          </h3>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">
            FIND OUR RESTAURANTS
          </h4>
          <p>45 Princes Highway,</p>
          <p>FIGTREE, NSW 2525</p>
          <p>02 4243 4520</p>
          <br />
          <p>Cnr Smith And Keira St,</p>
          <p>WOLLONGONG, NSW 2500</p>
          <p>02 4222 6020</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-primary">
            WORKING HOURS
          </h4>
          <p>MONDAY UNTIL FRIDAY</p>
          <p>9:00 - 22:00</p>
          <br />
          <p>SATURDAY - SUNDAY</p>
          <p>12:00 - 24:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
