/*
STRINGHE, NUMERi E ALTRI TIPI DI DATI IN JAVASCRIPT
in javascript ci sono 5 tipi di dati primitivi:
numeri, stringhe, boleani,null e undefinde e gli oggetti.
javascript converte un primitivo nel corrispondente oggetto
*/
//esemio: 
var nomeMaiuscolo = "Marco".toUpperCase();
console.log({nomeMaiuscolo});
var nomeMinuscolo = nomeMaiuscolo.toLocaleLowerCase();
console.log({nomeMinuscolo});
/*
a partire dal tipo primitivo stringa, javascript crea il corrispondente oggetto string, invoca il metodo toUppercase() per ottenere la versione stringa.
contribuisce a creare non poca confisione nella distinzione tra dati primititvi e oggetti, non sonopochi a semplificare sostenendo che in realtà in javascript tuutp è oggetto.
STRINGHE IN JAVASCRIPT
una stringa è una sequenza di caratteri delimitata da dopppi o singoli apici
*/
//esempio:
var stringaNum1 = ("stringa num 1");
var stringaNum2 = ('stringa num 2');
console.log({stringaNum1});
console.log({stringaNum2});
/*
NUMERI IN JAVASCRIPT
javascript ha un unico tipo di dato numerico. ciè non c'è distinzione formale, esempio tra intero e decimale
*/
//esempio:
var interoNegativo = -3;
var zero = 0;
var interoPositivo = 333;
console.log({interoNegativo});
console.log({zero}); 
console.log({interoPositivo});
/* 
stessa cosa si può fare con i numeri scientifici, orrale, esadecimale e con le virgole.
ogni valoreche va al di fuori dell'intervallo rappresentabile non genera un'eccezione ma viene rappresentato da due valori speciali:
infinity (infinito positivo)
-infinity (infinito negativo)
ogni valore che ha un precisione maggiore di quella rappresentabile viene considerata unguale a zero.
un altro valore numerico è NaN (not a number) che indica un valore numerico non defito.
I TIPI DI DATO NULL, UNDEFINED E BOOLEANO
javascript prevete 2 tipi di dato speciali per rappresentare valori nulli e non definiti.
il tipo dato null prevede  il solo valore null, che rapresenta un valore che non rientra tra i tipi di dato del linguaggi.
*/
//esempio:
var x = (null);
console.log({x});
/*
il valore null è diverso dal valore numerico 0 o dalla stringa vuota. infatti questultimi appartengono a tipi di numero stringa, mentr null è un tipo a se stante.
il tipo undefined rappresenta un valore che non esiste ed è il valore di una variabile non inizializzata a cui non è stato assegnato nessin valore.
il booleano prevededue soli valori: vero e valso; true e folse; 1 e 0; (tutti modi per dire vero e falso).
TIPIZZAZIONE DEBOLE
javascript è un linguaggio a tipizzazione depore o dinamica. significa che quando dichiariamo una variabile, non ne specifichiamo il tipo di dato che può contenere, può cambaire durante lo script.
quando dichiariamo una variabile senza specifichedi un valore, a questa ciene assegnato il valore undefined. il valore può cambaire tramite le nostre istruzionied assumere tipi diversi di dato.  
*/
//esempio:
var miaVariabile;
miaVariabile = 3;
miaVariabile = null;
miaVariabile = "tre";
miaVariabile = true;
console.log({miaVariabile});
/*
l'assegnamento puù comunque avvvenire direttamente nella dichiarazione.
ESPRESSIONIE OPERATORI
un espressione è una combinazione di valori, variabili ed operatori che rappresentano un valore 
esempio:
x + 1
nel caso si tratta di un espressione che combina una variabile x ed il valore numerico 1 tramite l'operatore + (più) per ottenere l'incremento di un unità del valore x. 
è evidente che un ruolo fondamentale nelle espressioni è assunto dagli operatori in base al numero di valori che possono combinare uno, due o tre valori.
OPERATORI ARITMETICI
per quel che riguarda il tipo di dato numerico, abbiamo gli operatori aritmetici, che consentono la combinazione di valori numerici.
esempi: operatore       nome 
          +         addizione
            -         sottrazione
            /         divisione
            *         moltiplicazione
            %         modulo o resto
esempio:
9/4
9%4 + 5
x + 10
seguono le regole di precedenza matematica
4 + 5 * 6 + 7
(4 +5) * (6+7)
gli operatori aritmetici prevedono tre operatori unari:
        operatore        nome
            -          negazione
            ++         incremento
            --         decremento
la negazione consente di ottenere un valore negativo di un numero. ad esempio, -x è il valore negativo del valore numerico rappresentato dalla variabilex.
gli operatori incrementano e decrementano sono applicabili soltanto a variabili e consentono di ottenere un valore rispettivamente aumentato o diminuito di uno.
viene eseguita prima della valutazione
*/
//esempio:
var x = (3);
var y = (x++);
console.log({x} + {y});
/*
il valore della variabile x verrà assegnato alal variabile y e soltanto sucessivamente x verrà incrementato di uno.
OPERATORI RELAZIONARI
gli operatori relazionari sono quelli utilizzati per il confronto tra valori:
        operatore        nome
            <           minore
            <=          minore o uguale
            >           maggiore
            >=          maggiore o uguale
            ==          uguale
            !=          diverso
            ===         strattamente uguale
            !==         stremmamente diverso
le espressioni che utilizzano gli operatori relazionari restuituiscono ub valore booleano in base all' esito del confronto.
esempio:
4 > 2 //true
5 != 4 + 1 //folse
il significato della maggior parte degli operatori devrebbe essere abbastanza intuitivo.
gli operatori logici consentono la combinazione di espressione booleane:
        operatore        nome
            &&           and   
            ||           or
            !            not
esempio:
(5 > 2) && (3 !=4) // true
true || (4 >= 6)  // true
!(5==5)          // false
OPERATORI DI ASSEGNAMENTO
l' espressione di assegnamento restituisce essa stessa un valore dell' espressione assegnata alla variabile:
esempio: 
x = 3 + 5;
y = (x = 3 + 5);
(x = 5? "cinque" : "diverso da cinque")
OPERATorE '?', PER ASSEGRAMENTI CONDIZIONALI
l' unico operatore ternario da javascript è l' operatore condizionale.
esse restituisce un valore in base ad una espressione boleana. la sua sintassi è:
condizione ? valore1 : valore2
x%2 == 0 ? "pari" : "dispari"
OPERATORI DI ESSEGNAMENTO COMPOSTI
oltre all (=), esistono altri operatori di assegnamento derivanti dalla combinazione degli operatori aritmetici e degli operatori sui bit con il simbolo =.
essi rappresentano uanabbreviazione
esempio:
x += 3;
equivalente:
x = x + 3;
analogicamente a += abbiabo a disposizione gli operatori come:
        Forma compatta      Scrittura equivalente
            x += y                  x = x + y    
            x -= y                  x = x - y
            x *= y                  x = x * y
            x /= y                  x = x / y
            x %= y                  x = x % y
l' uso di queste espressioni rende più compatibile il codice ma non sempre altrttanto leggibile.
OPERATORI SU STRINGHE
l' unico operatore su stringhe specifico è operatore concatenazione. esso consente di creare unanuova stringha come risultato delal concatenazione.
esso consente di creare una nuova stringa come risultato della concatenazione ed è rapprensentato dal simbolo del "più" (+):
"piano" + "forte" // "pianoforte"
*/
//esempio:
var strumento1 = "piano";
var strumento2 = "forte";
console.log({strumento1} + {strumento2});
//oppure:
var strumento= "piano";
strumento += "forte";
console.log({strumento});
/*
il suo utilizzo è abbastanza immediato, ma con le variabili si possono ottenere risultati non prebisti dal momento che il simbolo utilizato è lo stesso dell' addizione.
esempio:
x + y
CONVERSIONI TRA TIPI DI VARIABILI
effetua conversioni implicite 
*/
var x = "2";
var y = "2";
var calcolo =  x * y;
console.log({calcolo})
//conversione implicita delle variabili in booleano
if(3){
    console.log("vero")
}else{
    console.log("falso")
}
//operatore terrario
let ter1 = 3 ? "vero" : "falso";
console.log({ter1});
let ter2 = 0 ? "vero" : "falso";
console.log({ter2});
let ter3 = undefined ? "vero" : "falso";
console.log({ter3});
let ter4 = null ? "vero" : "falso";
console.log({ter4});
let ter5 = true ? "vero" : "falso"
console.log({ter5})
let ter6 = false ? "vero" : "falso"
console.log({ter6})
let ter7 = NaN ? "vero" : "falso";
console.log({ter7})
let ter8 = Infinity ? "vero" : "falso"
console.log({ter8})
let ter9 = (4 * 2) % 3 - (9 % 0) ? "vero" : "falso"
console.log({ter9})
let ter10 = 5=="5" ? "vero" : "falso";
console.log({ter10})
let ter11 = 3!==2 ? "vero" : "falso";
console.log({ter11})
let ter12 = 14 > 12 ? "vero" : "falso";
console.log({ter12})
/*
BLOCCHI DI CODICE
nei blocchi di codice più istruzzioni possono essere ragruppate esempio:
*/
{
    x = x + 0;
    x = x * 2;
}
/*
al termine del blocco non va inserito (;) 
ISTRUZZIONI CONDIZZIONALI: IF
le istruzioni condizionali sono una categoria di istruzioni che consentono di eseguire blocchi di codice alternativi in base ad una conizione, consentono script di prendere senso alle decisioni.
javascript prevede 2 istuzioni condizionali:
- if semplice
- ifa alternativa (else)
- if a cascata (if esle if else)
if semplici:
la forma if pura esegue un blocco di codice solo se una condizione è vera:
esempio:
if (condizione) {
//istruzioni
}
if eslse:
if eslse viene eseguito un blocco di codice oppure un altro valore delal condizione:
esempio:
if: (condizione) {
    istruzioni1
} else {
    istruzioni2
}
if a cascata:
mette a disposizione più alternative:
esempio:
if (condizione1) {
	istruzioni1
} else if (condizione2) {
	istruzioni2
} else {
	istruzioni3
}
se la condizione 1 è vera viene ese guito un blocco istruzioni1
le if si usano per dare condizione eistruzioni per cambiare variare le opzioni 
*/
// esempi pratici:
//if:

if (x >= 37) {
	messaggio1 = "Hai la febbre.\n";
	messaggio1 = messaggio1 + "Temperatura: " + x + " gradi.";
}
//if else:
if (x%2 == 0) {
	messaggio2 = x + " è pari";
} else {
	messaggio2 = x + " è dispari";
}
//if a cascata:
if (x >= 37) {
	messaggio3 = x + " è pari";
} else if (x%2 == 0) {
	messaggio3 = x + " è dispari";
} else {
    messaggio3 = x + " è qualcosa";
}

console.log(messaggio1)

console.log(messaggio2)

console.log(messaggio3)
/*
SWICH CASE
oltre che agli if si può usare anche:
esempio:
switch (espressione) {
	case espressione1:
		istruzioni1;
	break;
	case espressione2:
		istruzioni2;
	break;
	// ...
	default:
		istruzioni4;
	break;
}
L'espressione di riferimento dello switch viene confrontata in sequenza con le espressioni dei vari case.
Non appena viene individuata un'espressione corrispondente si esegue il blocco di istruzioni associato
possiamo decidere di non mettere l'istruzione break in corrispondenza di uno o più case perchè vogliamo eseguire uno stesso blocco di codice per un gruppo di valori
si usa per calcoli gradi come:
*/
switch (10) {
	case 1:
	case 2: 
	case 3: 
	case 4: 
	case 5:
		giudizio = "insufficiente";
		break;
	case 6:
		giudizio = "sufficiente";
		break;
	case 7:
		giudizio = "discreto";
		break;
	case 8:
		giudizio = "buono";
		break;
	case 9:
		giudizio = "ottimo";
		break;
	case 10:
		giudizio = "eccellente";
		break;
	default:
		messaggio = "non classificato";
		break;
}

console.log(giudizio)

