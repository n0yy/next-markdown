import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const contents = fs.readFileSync(fullPath, "utf-8");
    const resultMatter = matter(contents);

    const posts = {
      slug,
      title: resultMatter.data.title,
      subTitle: resultMatter.data.subtitle,
      date: resultMatter.data.date,
    };
    return posts;
  });

  return allPostsData.sort((x, y) => (x.date < y.date ? 1 : -1));
}

/* 
Kode di atas merupakan sebuah fungsi bernama getPostsData yang bertugas untuk mengambil data dari file-file yang ada dalam direktori postsDir. Pertama-tama, kode ini menggunakan fungsi readdirSync dari modul fs untuk membaca semua nama file dalam direktori postsDir dan menyimpannya dalam variabel fileNames.

Selanjutnya, kode ini menggunakan metode map untuk memproses setiap nama file dalam fileNames. Pada setiap iterasi, kode ini melakukan beberapa hal:

1. Mengambil slug dari nama file dengan menghapus ekstensi .md.
2. Menyatukan direktori postsDir dengan nama file untuk membentuk fullPath.
3. Membaca isi file menggunakan fungsi readFileSync dari modul fs dengan format encoding "utf-8".
4. Mentransformasi isi file menggunakan matter untuk memisahkan antara data metadata dengan konten.
5. Menyimpan beberapa data dari metadata dalam sebuah objek posts.
6. Setelah semua file diproses, kode ini mengembalikan sebuah array yang berisi semua objek posts yang telah dibuat dan diurutkan berdasarkan tanggal, dengan yang terbaru di atas.

Dengan demikian, fungsi getPostsData dapat digunakan untuk mengambil data dari file-file markdown yang ada dalam direktori postsDir dan mengembalikan array yang berisi informasi yang diperlukan dari setiap file.
*/

export function getPost(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const contents = fs.readFileSync(filePath, "utf-8");

  const resultMatter = matter(contents);
  return {
    slug: path.basename(filePath).replace(/\.md$/, ""),
    title: resultMatter.data.title,
    subTitle: resultMatter.data.subtitle,
    date: resultMatter.data.date,
    content: resultMatter.content,
  };
}
