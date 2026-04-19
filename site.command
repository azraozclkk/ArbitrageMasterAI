#!/bin/bash

# Bu dosyanın bulunduğu klasöre git
DIR="$(dirname "$0")"
cd "$DIR"

echo "======================================"
echo "    ArbitrageMaster AI Başlatılıyor   "
echo "======================================"
echo "Sunucu başlatılıyor... Lütfen bekleyin."

# Yerel sunucuyu arka planda başlat
python3 -m http.server 8000 &
SERVER_PID=$!

# Tarayıcının açılması için kısa bir bekleme
sleep 1
open http://localhost:8000

echo "Tarayıcınız açıldı! (http://localhost:8000)"
echo ""
echo "Siteyi kullanmaya devam edebilirsiniz."
echo "Sunucuyu durdurmak için klavyeden [CTRL + C] yapabilir veya bu terminal penceresini kapatabilirsiniz."

# Terminalin kapanmaması ve sunucunun arka planda yaşamaya devam etmesi için bekletiyoruz
wait $SERVER_PID
