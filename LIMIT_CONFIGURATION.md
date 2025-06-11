# Quicktify Limit Configuration System

Quicktify memiliki 3 cara untuk mengatur limitasi analisis dan estimasi rating per bulan dengan **priority system**.

## 🎯 **Priority System (dari tertinggi ke terendah):**

### 1. **CUSTOM LIMITS** (Priority Tertinggi)

Set limit spesifik untuk analisis dan/atau estimasi:

```env
VITE_ANALYSIS_LIMIT=10
VITE_ESTIMATION_LIMIT=15
```

- Jika salah satu diset, yang lain default ke 30
- **Mode `VITE_SHOW_MODE` diabaikan** jika custom limits diset

### 2. **PRESET MODES** (Priority Menengah)

Set mode preset yang sudah ditentukan:

```env
VITE_SHOW_MODE=DEMO    # 5 analisis + 5 estimasi
# atau
VITE_SHOW_MODE=DEFAULT # 30 analisis + 30 estimasi
```

### 3. **UNLIMITED** (Priority Terendah - Default)

Tidak set apapun = unlimited:

```env
# Tidak ada environment variable limit
```

## 📋 **Contoh Konfigurasi Lengkap:**

### Pameran/Demo (5 each):

```env
VITE_SHOW_MODE=DEMO
```

### Produksi Normal (30 each):

```env
VITE_SHOW_MODE=DEFAULT
```

### Custom untuk Testing (2 analisis, 10 estimasi):

```env
VITE_ANALYSIS_LIMIT=2
VITE_ESTIMATION_LIMIT=10
```

### Unlimited (development):

```env
# Tidak set environment variable apapun
```

## ❓ **FAQ:**

**Q: Apa bedanya `VITE_SHOW_MODE=DEFAULT` vs `VITE_ANALYSIS_LIMIT=30`?**
A:

- `VITE_SHOW_MODE=DEFAULT` → 30 analisis + 30 estimasi
- `VITE_ANALYSIS_LIMIT=30` → 30 analisis + 30 estimasi (sama hasil)
- **Tapi** jika set `VITE_ANALYSIS_LIMIT=30`, maka `VITE_SHOW_MODE` diabaikan

**Q: Kalau saya set keduanya gimana?**

```env
VITE_SHOW_MODE=DEMO          # 5 + 5
VITE_ANALYSIS_LIMIT=20       # Custom 20
```

A: Yang dipakai → 20 analisis + 30 estimasi (custom limit prioritas tertinggi)

**Q: Kapan pakai mode mana?**
A:

- **DEMO mode**: Untuk pameran/presentasi dengan limit ketat
- **DEFAULT mode**: Untuk produksi dengan limit standard
- **CUSTOM limits**: Untuk kasus khusus dengan angka spesifik
- **UNLIMITED**: Untuk development/testing

## 🔧 **Technical Implementation:**

- Reset limit: Setiap tanggal 1 (awal bulan)
- Counter: Terpisah per user dan per tipe (analisis vs estimasi)
- Protection: UI overlay + button disabled + backend validation

## 🎨 **UI Features:**

- **Progress Bar**: Visual indicator showing usage percentage
- **Color Coding**:
  - Green: Safe zone (< 80%)
  - Yellow: Warning zone (80-99%)
  - Red: Limit reached (100%)
- **Status Icons**:
  - ✅ CheckCircle: Normal usage
  - ℹ️ Info: Near limit
  - ⚠️ AlertTriangle: At limit
- **Mode Indicator**: Badge di pojok kanan bawah showing current mode
- **Responsive Design**: Works on mobile and desktop
