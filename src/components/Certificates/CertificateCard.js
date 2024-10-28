import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import jsPDF from "jspdf";

function CertificateCard({ imagePath, title, description }) {
  // Function to open the PDF in a popup window
  const handleOpenPdf = () => {
    const doc = new jsPDF(); // Create new jsPDF instance

    // Add image to the PDF
    doc.addImage(imagePath, 'JPEG', 10, 10, 180, 160);

    // Generate the PDF Blob
    const pdfBlob = doc.output('blob');

    // Create a new Blob URL for the PDF
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open the PDF in a popup window with specific dimensions
    const popup = window.open("", "PDF", "width=800,height=600");
    if (popup) {
      popup.document.write(
        `<html><head><title>${title}</title></head><body style="margin: 0;">
          <iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;"></iframe>
        </body></html>`
      );
    }
  };

  return (
    <>
      <Card className="certificate-card-view" style={{ width: "18rem", height: "26rem", marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          {/* Display the image */}
          <img
            src={imagePath}
            alt={title}
            style={{ width: "100%", height: "14rem", objectFit: "cover", marginBottom: "10px" }}
          />

          {/* Button to open PDF in a popup */}
          <Button variant="primary" onClick={handleOpenPdf}>
            Preview
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CertificateCard;
