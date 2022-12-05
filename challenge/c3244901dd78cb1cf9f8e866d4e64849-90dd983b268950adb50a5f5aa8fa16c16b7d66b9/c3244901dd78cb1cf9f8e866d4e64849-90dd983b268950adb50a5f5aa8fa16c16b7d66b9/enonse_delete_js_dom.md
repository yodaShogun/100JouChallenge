### Enonse 1
Itilize metòd `getElementById` a pou w jwenn eleman `<p>` a, epi chanje tèks la pou w mete `"Ayibobo"`

    <p id="demo"></p>

    <script>
       document.getElementById("demo").textContent = "Ayibobo";
    </script>
   
### Enonse 2
Itilize metòd `getElementsByTagName` nan pou w jwenn premye eleman `<p>` a, epi chanje tèks la pou w mete `"Ayibobo"`

    <p id="demo"></p>

	<script>
	   document.getElementsByTagName('p')[0].textContent = "Ayibobo";
	</script>

### Enonse 3
Chanje tèks premye eleman ki gen klas `"test"` la.

    <p class="test"></p>
    <p class="test"></p>

    <script>
       document.getElementsByClassName('test')[0].textContent = "Bonjou";
    </script>