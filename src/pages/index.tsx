import { PageProps, graphql } from 'gatsby'
import React from 'react'

import { Container } from 'components/atoms/Container'
import { Seo } from 'components/atoms/Seo'

import { TextSection } from 'components/molecules/TextSection'

import { AboutMe } from 'components/organisms/Homepage/AboutMe'
import { Contact } from 'components/organisms/Homepage/Contact'
import { Hero } from 'components/organisms/Homepage/Hero'
import { Opinions } from 'components/organisms/Homepage/Opinions'
import { Pricing } from 'components/organisms/Homepage/Pricing'

import { Layout } from 'views/Layout'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Purple Cafe English | Strona Główna" />
      <Hero
        title="Purple Cafe English"
        subtitle="konwersacje językowe"
        img={{
          src: data.heroImg?.childImageSharp?.gatsbyImageData!,
          alt: 'Kawa w fioletowej filiżance',
        }}
      />
      <TextSection
        title="Dla kogo"
        subtitle="(Are you a coffee drinker?)"
        content='<span class="bigger16">Czy chciałbyś w końcu „rozgadać się" po angielsku?​​​​ <br/><br/>
Marzysz, żeby łączyć naukę języka z przyjemnością i brakiem stresu?​​​​ <br/><br/> ​​​Pragniesz podszkolić się ze względu na własny rozwój, większą pewność siebie w pracy,
wyjazdy zagraniczne lub myślisz o przymierzeniu się do zdawania certyfikatów<br/><br/>
​Potrzebujesz przygotować się całościowo do matury, a przy tym przełamać barierę w mówieniu? <br/><br/>A może chciałbyś raz jeszcze dać sobie szansę po tym jak doszedłeś do wniosku, że „nie masz talentu do języków”, bo jednak wierzysz, że musi istnieć metoda?</span> <br/><br/> <h3>FIOLETOWA KAWIAERENKA MOŻE BYĆ WŁAŚNIE DLA CIEBIE!​</h3><br/> <span class="bigger18">Zajęcia przeznaczone dla:</span>​ <ul class="bullets"><li>▶ osób dorosłych</li><li>▶ licealistów i maturzystów</li><li>▶ zainteresowanych rozwojem od poziomu 0 do B2+/C1</li><li>▶ zainteresowanych podejściem do egzaminów Cabridge po poziom FCEh</li></ul><br/><strong>MÓWIENIE TO PODSTAWA</strong><br/><span class="small">Wiele osób miało w szkole trudności z nauczeniem się języka lub po prostu mówieniem po angielsku i nie wierzy w swoje możliwości, mimo że pragnie rozwijać się w tym kierunku (bywa to marzenie zepchnięte głęboko na dno podświadomości, ponieważ od lat wydaje się nierealne). Wierzę, że aby to się udało trzeba przede wszystkim <b>mówić</b> – niekoniecznie od razu perfekcyjnie. Mówić w oparciu o angażujący materiał, który pobudza do wypowiedzi o tym co dla nas <b>interesujące,</b> przyjemne, co z kolei naturalnie motywuje do dalszej praktyki. Mówić, tak jak dziecko, które zaczyna od „zabawnych wypowiedzi”, aż w końcu zostaje zrozumiane, a <strong>poprawność przychodzi z czasem.</strong>
„Mama daj” jest lepsze niż nie powiedzenie niczego – w ten sposób dziecko może zaspokoić swoją potrzebę.
Często lubimy się wypowiadać na różne tematy – co by się stało gdybyśmy te codzienne rozmowy próbowali wyrażać po angielsku? :)</span><br/><br/><strong>OTOCZENIE JĘZYKIEM</strong><br/><span class="small">Istotne w nauce języka jest otaczanie się nim, tzw. <strong>immersja językowa,</strong> czyli zanurzenie w języku, poprzez rozbudzające ciekawość treści w różnej formie, jak filmiki z YouTube, artykuły, wiadomości ze świata, rozmaite <strong>materiały autentyczne</strong> (ogólnie także mogą to być książki, filmy, podcasty, teksty piosenek, blogi, gry, przewodniki itp.) jak i <strong>docieranie wiedzy różnymi kanałami</strong> (słuchowym, wzrokowym, kinestetycznym i nie tylko). Na zajęciach bazuję na tego typu treściach i sposobach przyswajania wiedzy - filmik i coś do poczytania to podstawa zadań domowych. A oglądamy i czytamy po to, żeby następnie o tym opowiedzieć. Uwzględniam przy tym po części <strong>zainteresowania</strong> (bo to wielka dawka darmowej motywacji!). Z pewnością znajdzie się sposobność do wypowiedzenia na ulubione tematy.
I co najlepsze – można przy tym <strong>zacząć kompletnie od zera.</strong></span><br/><br/><strong>PODEJŚCIE I ATMOSFERA</strong><br/><span class="small">Czym jeszcze wyróżnia się Purple Cafe English? To szczególnie <strong>ciepła i pełna wsparcia atmosfera.</strong> :)
Oczywiście na dobry początek - <strong>kawa to podstawa!</strong> Herbata równie mile widziana. ;)
Zostało już dowiedzione naukowo, że <strong>zrelaksowany umysł uczy się lepiej.</strong> Stąd dobrze jest ucząc się zadbać o pozytywną atmosferę wokół siebie i swój nastrój - kubek czegoś ulubionego do picia, zorganizowany, wygodny kąt, gdzie można się skoncentrować i... metodę nauki, która do nas przemawia. Co do mnie, staram się być dla swoich klientów nauczycielem, który jest jednocześnie mentorem, dbając o przypływ wiary we własne siły uczącego się, a także by samodzielnie angażował się w proces nauki poza zajęciami. Tłumaczę na czym polega <strong>plastyczny dla umysłu sposób uczenia się.</strong> Stosuję też <strong>podejście wspierające,</strong> w którym staram się regularnie zauważać mniejsze i większe postępy, ponieważ wiem jak to buduje wiarę we własne możliwości językowe. Mając świadomość, że blokada językowa bywa głęboko zakorzeniona, porównuje jej przezwyciężanie do procesu uzdrowienia z traumy - <strong>praktyka pokazuje, że przyjazna dla umysłu atmosfera oraz ciągły postęp małymi krokami przy uznawanych dokonaniach mogą wiele zdziałać w temacie blokady.</strong></span>​'
        background="primary"
      />
      <AboutMe
        title="O mnie"
        subtitle="(Who's the barista here?)"
        content="<strong>Hello you :)</strong> <br/>Nazywam się Asia Konefał i uczę angielskiego poprzez konwersacje. <br/>Jestem magistrem filologii angielskiej Uniwersytetu Rzeszowskiego<br/>

i mam doświadczenie pracy w szkole językowej stacjonarnie oraz online, jak i praktyki własnych zajęć.<br/>

W swojej ścieżce stawania się lektorem poznałam aktualne metody nauczania, które pozwalają przyspieszyć proces uczenia,<br/> wykorzystując w sposób naturalny plastyczne zdolności umysłu. Jednocześnie odkryłam jak ważne jest przy tym uwzględnianie własnych preferencji, zainteresowań i po prostu podążania za swoją ciekawością.<br/>

Dzisiaj wiem już z praktyki, że takie połączenie działa i jest bardzo skuteczne.<br/>

Dlatego chcę się tą wiedzą praktycznie dzielić na moich zajęciach.<br/>

Cieszę się, że tutaj trafiłeś!<br/><br/>

​​

Jednym z moich ulubionych wyrażeń po angielsku jest out of the box, czyli dosłownie „poza pudełkiem”,<br/> nieszablonowo. Wierzę, że kiedy chce się coś osiągnąć, warto nie raz zakwestionować schematyczne podejście i pójść<br/> mniej utartą ścieżką, która może być bardziej intuicyjna i skuteczna<br/>

 niż „utarty szlak” (który skądinąd czasami bywa najlepszy). Z jednej strony uznaję wysiłek „ciężkiej pracy” rozumianej<br/> po prostu jako mocne zaangażowanie za rzecz bardzo potrzebną w nauce. Z drugiej strony wybieram postrzeganie<br/> jako zaletę życia we współczesnym świecie pełnym możliwości i większej niż kiedykolwiek wiedzy, w którym różne<br/> aspekty codzienności można dostosować do własnych potrzeb i upodobań, a przez to działać<br/>

w większej harmonii ze sobą.

Odkrycie, że podobnie można podejść do przyswajania wiedzy jest dla mnie fascynujące<br/>

i napawające nadzieją na to, że to co do tej pory mogło wydawać się nieosiągalne, bo opór był zbyt duży, staje się<br/> możliwe.​

​​​​

Prywatnie lubię kolor fioletowy, popijanie ulubionej kawy, przebywanie pośród natury (Bieszczady!), głębokie<br/> rozmowy, nastrajająca muzykę (często instrumentalną) i zgłębianie wiedzy, która pomaga mi lepiej zrozumieć siebie i<br/> drugiego człowieka.<br/>

Z natury jestem słuchaczem i mocno motywuje mnie pomaganie innym w rozwoju.<br/>

Myślę, że w dużej mierze właśnie stąd mój zawód :)"
        img={{
          src: data.meImg?.childImageSharp?.gatsbyImageData!,
          alt: 'Fotografia prowadzącej zajęcia',
        }}
      />
      <Opinions
        title="Opinie"
        subtitle="(And... maybe some honey?)"
        opinions={[
          {
            description:
              '„Zajęcia są prowadzone w niezwykle interesujący oraz angażujący sposób. Dostosowane do potrzeb oraz poziomu. Z czasem wszystko zaczęłam rozumieć i w 100% ufać, że tak właśnie w tym momencie powinno być. Format zajęć jest idealnie dostosowany do studenta, jeśli jakiejś metody się „nie czuje”, szybko jest to wyłapywane i zastępowane czymś innym, co jest wspaniałe i powoduje, że się nie zniechęcam do nauki. Gdy zaczynałam lekcje miałam wątpliwości czy dam radę się nauczyć języka na tyle, żeby pozwalał mi na komunikację. Teraz wiem, że jeśli ma się odpowiedniego mentora to wszystko jest możliwe! <br/>Uwielbiam te zajęcia!”',
            clientName: 'Gosia',
          },
          {
            description:
              '„Dzięki zajęciom z Panią Asią udało mi się pokonać barierę językową oraz w znacznym stopniu udoskonalić poziom angielskiego. Każda lekcja odbywała się w przyjaznej, komfortowej atmosferze. Materiał był dostosowany pod moje zainteresowania i potrzeby. Dzięki tym zajęciom miałam bardzo dobre wyniki w szkole, jak i na maturze.”',
            clientName: 'Dominika',
            clientNote: 'maturzystka roku 2023/2024 (rozszerzenie)',
          },
          {
            description:
              '„Z Asią miałam przyjemność uczyć się angielskiego ponad rok. Jej podejście, cierpliwość i zaangażowanie sprawiały, że w końcu się odblokowałam i zaczęłam rozmawiać. <br/>Polecam każdemu kto tak jak ja chce przełamać barierę językową i nie bać się konwersacji.”',
            clientName: 'Magdalena',
          },
          {
            description:
              '„Pani Joanna to najlepsza nauczycielka z jaką miałam okazję uczyć się języka angielskiego. Przygotowywałam się z nią do matury oraz praktykowałam rozmowę. <br/>Jest bardzo sympatyczną osobą, a lekcje są naprawdę komfortowe i interesujące. Dostosowuję materiał pod potrzeby i zainteresowania ucznia. Mój poziom angielskiego znacznie się poprawił, co w głównej mierze zawdzięczam właśnie Pani Asi.”',
            clientName: 'Julia',
            clientNote: 'maturzystka roku 2023/2024 (rozszerzenie)',
          },
          {
            description:
              '„Chcąc się rozwijać i poszerzać horyzonty zapisałam się na korepetycje z języka angielskiego. Lekcje prowadziła Asia, która na każdych zajęciach omawiała ze mną inny temat.<br/> W końcu zrozumiałam jak posługiwać się czasami w języku angielskim gdzie do tej pory sprawiało mi to dużą przeszkodę. Dzięki zadawanym pracom domowym nauczyłam się systematyczności. Serdecznie polecam Asię jako korepetytorkę dla osób w każdym wieku!​”',
            clientName: 'Sonia',
          },
        ]}
      />
      <TextSection
        title="Więcej o metodzie"
        subtitle="(Is this tea really for me?)"
        content='<strong>GRAMATYKA</strong><br/><span class="small">Przyswajanie dla wielu problematycznej <strong>gramatyki</strong> też może odbywać się poprzez mówienie. Trochę teorii, a przy tym <strong>dużo praktyki</strong> – oto przepis na sukces :) I oczywiście powtórki! Ponieważ język jest <strong>żywym tworem</strong> trudno jest nauczyć się go praktycznie robiąc to tylko „na sucho” poprzez podręcznik i ćwiczenia. Oczywiście zadania gramatyczne mają dużo wartość, są też elementem potrzebnym. Warto jednak poszerzyć sposób myślenia o gramatyce i jej szlifowaniu. Dzięki teorii i ćwiczeniom możemy sporo zrozumieć, poznać zasady, ale nadal może zabraknąć <strong>umiejętności komunikacji,</strong> co często zdarza się po ukończeniu obowiązkowej edukacji. O ile dla niektórych ta nauka „na sucho” będzie mimo wszystko skuteczna jeśli chodzi o samo pojęcie języka, większości nadal będzie sprawiać mniejszy lub większy problem, mając szczególnie na uwadze mówienie i blokadę językową.
<strong>Konwersacje</strong> to <strong>uniwersalne rozwiązanie</strong>.
</span><br/><br/><strong>PŁYNNY PROCES NAUKI</strong><br/><span class="small">Kolejną ważną kwestią jest <strong>docieranie wiedzy różnymi kanałami.</strong> Przyswajane języka słuchowo i wizualnie to jedna dobra wiadomość. W tym sposobie nauki wykorzystujemy także mocno kanał kinestetyczny (praktyczne przykłady poprzez ciągłe mówienie, angażowanie odczuć), interpersonalny (rozmowa z drugą osobą) oraz uwzględniamy własne wybory, intuicję, ocenę tego o czym mówimy (kanał intrapersonalny, nakierowany na własny świat wewnętrzny), co również ma znaczenie dla żywego i trwałego przyswajania wiedzy. Być może w szkoła nie spełniała Twoich potrzeb przyswajania wiedzy? Dzięki temu podejściu mamy szansę wyjść ze schematu "zakuj, zapomnij" i otworzyć się na głębszy, płynniejszy proces, w którym nie musimy się czegoś "wyuczyć" na chwilę (na ocenę), żeby móc przejść dalej. Trzeba przy tym odrobinę wypłynąć na głębię i zaufać metodzie - uwierzyć, że inaczej niż do tej pory też się da. :) <br/><br/>
Nauka języka ma prowadzić do stworzenia <strong>mapy językowej</strong> w naszym umyśle, z której czerpiemy kiedy chcemy coś wyrazić (dokładanie w ten sposób jak uczyliśmy się pierwszego języka jako dzieci). Chodzi o zespół zasad według których budujemy wypowiedzi w danym języku. Im więcej obcowania z językiem i praktycznych doświadczeń mówienia, tym bardziej mapa się poszerza i zostaje utrwalana. Idąc tym torem, zauważymy, że jesteśmy w stanie <strong>tworzyć coraz bardziej złożone wypowiedzi</strong> i zaczynamy z czasem myśleć po angielsku, przy czym mogą nas nagle zaskoczyć słówka, wyrażenia, czy konstrukcje, których wcześniej aktywnie nie używaliśmy, a wtedy widzimy, że here we go - <strong>maszyna językowa sama się napędza!</strong>​</span><br/><br/><strong>​PRZYGOTOWANIE DO MATURY</strong><br/><span class="small">Przygotowuję kompleksowo do matury częściowo metodą konwersacji, ale także w dużym stopniu poprzez dostosowane ćwiczenia gramatyczne, szlifowanie umiejętności pisania i słuchania oraz przerabianie arkuszy egzaminacyjnych, co uważam za jedną z kluczowych rzeczy. Przygotowanie do matury w połączeniu z praktyczną nauką języka, która jest moim celem, wymaga czasu, w związku z czym nie przyjmuję nowych uczniów bezpośrednio przed maturą. Zgłoszenia do końca stycznia (choć warto zacząć wcześniej).</span><br/><br/><strong>CZY KAŻDY MOŻE NAUCZYĆ SIĘ MÓWIĆ W JĘZYKU OBCYM?</strong><br/><span class="small">Biorąc pod uwagę, że każdy z nas dobrze opanował zasady tworzenia zdań we własnym języku (i to zanim nauczył się czytać i pisać!), odpowiedź brzmi: <strong>TAK</strong>.</span>​'
        background="white100"
      />
      <Pricing
        title="Cennik"
        subtitle="Is this coffee... nuts?"
        firstClasses="110zł - pojedyncze zajęcia"
        nextClasses="55zł - pierwsze zajęcia ♥"
      />
      <Contact
        phone="793 155 940"
        email="joannakonefal.lektor@gmail.com"
        facebook="www.facebook.pl/purplecafeenglish"
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    heroImg: file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
    meImg: file(name: { eq: "me" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`
