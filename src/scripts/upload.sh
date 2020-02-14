server='juanma@juanet.in'

if [ $(ls dist | wc -l) == 1 ]
then
    ssh $server 'cd /var/www/html; rm -rf selection-stats/*'
    scp dist/SelectionStats/* $server:/var/www/html/selection-stats;
else
    echo "No se ha subido"
fi