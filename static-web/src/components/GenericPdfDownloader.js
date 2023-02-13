import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from 'react-bootstrap';

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {

  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input, { logging: true, letterRendering: 1, useCORS: true })
      .then((canvas) => {
        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${downloadFileName}.pdf`);
      })


  }

  return <Button
    className='leng-button'
    variant='secondary'
    size='sm'
    onClick={downloadPdfDocument}
  >
    Download PDF
  </Button>

}

export default GenericPdfDownloader;