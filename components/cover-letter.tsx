"use client";

import { useState } from "react";
import CoverLetterForm from "./cover-letter-form";
import CoverLetterPreview from "./cover-letter-preview";

export default function CoverLetter() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [source, setSource] = useState("");
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);

  const toggleDoc = (doc: string) => {
    if (selectedDocs.includes(doc)) {
      setSelectedDocs(selectedDocs.filter((d) => d !== doc));
    } else {
      setSelectedDocs([...selectedDocs, doc]);
    }
  };

  const content: string = `Kepada Yth,
Kepala Bagian HRD
${company || " . . . "}

Dengan hormat,
Sehubungan dengan informasi mengenai lowongan pekerjaan ${
    position || " . . . "
  } yang saya baca di ${
    source || " . . . "
  }, maka saya yang bertanda tangan di bawah ini :

Nama : Muhammad Akmal
Tempat/Tgl Lahir : Serang, 20 November 2001
Jenis Kelamin : Laki - laki
Pendidikan : S1 Teknik Informatika
Kewarganegaraan : Indonesia
Agama : Islam
Nomor Telepon : 083893070393
Alamat : Jalan Kp. Terate RT. 08/02, Kec. Kramatwatu, Serang, Banten 42161

Dengan ini bermaksud mengajukan lamaran pekerjaan di ${
    company || " . . . "
  } dengan posisi sebagai ${
    position || " . . . "
  }. Saya telah membaca semua kualifikasi dan saya optimis bahwa saya adalah orang yang tepat untuk posisi ini. Untuk itu, sebagai bahan pertimbangan Bapak/Ibu HRD, bersama surat lamaran pekerjaan ini saya turut melampirkan :

${selectedDocs.map((d) => `- ${d}`).join("\n") || " . . . "}

Besar harapan saya Bapak/Ibu bisa memberikan saya kesempatan wawancara, sehingga saya bisa menjelaskan lebih lanjut mengenai potensi diri dan kemampuan yang saya miliki. Demikian surat lamaran pekerjaan ini saya sampaikan, atas perhatiannya saya ucapkan terima kasih. Semoga ${
    company || " . . . "
  } selalu sukses dan sejahtera.


Hormat Saya,

Muhammad Akmal`;

  return (
    <>
      <CoverLetterForm
        company={company}
        setCompany={setCompany}
        position={position}
        setPosition={setPosition}
        source={source}
        setSource={setSource}
        selectedDocs={selectedDocs}
        toggleDoc={toggleDoc}
      />
      <CoverLetterPreview content={content} />
    </>
  );
}
