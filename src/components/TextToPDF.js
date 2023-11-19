import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const CreatePdf = (texts) => {
    const content = texts.split("\n");

    const documentDefinition = {
        content: [...content, 'Generado por Chatify'],
    };

    pdfMake.createPdf(documentDefinition).open();
}