# Function untuk membalik setiap kata tanpa mengubah urutan kata
def reverse_per_kata(kalimat):
    kata_list = kalimat.split()
    hasil = []

    for kata in kata_list:
        hasil.append(kata[::-1])

    return " ".join(hasil)


# Function untuk mengurutkan kata berdasarkan indeks pada list urutan
# Indeks pada list urutan dimulai dari 1
def urutkan_kalimat(kalimat, urutan):
    kata_list = kalimat.split()
    hasil = []

    for indeks in urutan:
        hasil.append(kata_list[indeks - 1])

    return " ".join(hasil)


# Function untuk mengganti huruf vokal dengan simbol tertentu
# opsi = 1 -> huruf vokal kecil
# opsi = 2 -> huruf vokal kapital
def ganti_vokal(kalimat, opsi):

    if opsi == 1:
        kalimat = kalimat.replace("a", "4")
        kalimat = kalimat.replace("i", "1")
        kalimat = kalimat.replace("u", "|_|")
        kalimat = kalimat.replace("e", "3")
        kalimat = kalimat.replace("o", "0")

    elif opsi == 2:
        kalimat = kalimat.replace("A", "4")
        kalimat = kalimat.replace("I", "1")
        kalimat = kalimat.replace("U", "|_|")
        kalimat = kalimat.replace("E", "3")
        kalimat = kalimat.replace("O", "0")

    return kalimat


# =========================
# Uji Program
# =========================

print(reverse_per_kata("AKU CINTA KAMU"))
# Output: UKA ATNIC UMAK

print(urutkan_kalimat("HARI INI SEDANG BELAJAR PYTHON", [5, 1, 4, 3, 2]))
# Output: PYTHON HARI BELAJAR SEDANG INI

print(ganti_vokal("Aku Cinta Kamu", 1))
# Output: Ak|_| C1nt4 K4m|_|

print(ganti_vokal("Aku Cinta Kamu", 2))
# Output: 4ku Cinta Kamu