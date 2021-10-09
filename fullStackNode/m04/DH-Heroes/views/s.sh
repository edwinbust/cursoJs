for k in index babbage berners-lee hamilton hopper lovelace turing
do
cp base.html $k.html
echo "<title>Enviar un archivo al $k</title>"			>> $k.html
echo "</head>"			>> $k.html
echo "<body>"			>> $k.html
echo "<h1>¡Hola "$k"!</h1>"			>> $k.html
echo "</body>"			>> $k.html
echo "</html>"			>> $k.html

done

