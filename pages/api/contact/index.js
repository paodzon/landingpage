import { mailOptions, transporter } from "@/config/nodemailer";

export const handler = async (req, res) => {
  try {
    const { formData } = req.body;
    if (!formData) {
      return res.status(400).json({ message: "Bad request" });
    }
    const formattedData = Object.fromEntries(
      Object.entries(formData)
        .sort(([keyA], [keyB]) => {
          if (keyA.includes("name") && !keyB.includes("name")) {
            return -1;
          } else if (!keyA.includes("name") && keyB.includes("name")) {
            return 1;
          } else if (keyA === "notes") {
            return 1; 
          } else if (keyB === "notes") {
            return -1; 
          } else {
            return keyA.localeCompare(keyB);
          }
        })
        .map(([key, value]) => [
          key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
          key === "sacrament"
            ? value.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())
            : value,
        ])
    );

    const htmlData = Object.entries(formattedData)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("");
    await transporter.sendMail({
      ...mailOptions,
      subject: "San Sebastian Cathedral Reservations",
      text: "Make reservations",
      html: `<h2>San Sebastian Cathedral Reservations</h2>${htmlData}`,
    });
    return res.status(201).json({ message: "Email sent!" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default handler;
