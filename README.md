# ui5-examples
UI5 projesini çalıştırabilmeniz için node modul kütüphanesi olan browser-sync'i ilk olarak şu şekilde kurmanız gerekmektedir.

    `$ npm install -g browser-sync `
    
kurulum işlemi tamamlandıktan sonra projeyi git yada terminalden aşağıdaki komutu;

   `$ browser-sync start -server --files '**/*' --no-notify --host localhost --port 8101 `

kullanarak çalıştırabilirsiniz. 

# Kısaca UI5 ve UI5 Element

## SAPUI5 Nedir?

Kısaca  [https://blogs.sap.com/2015/09/29/sapui5-for-dummies-what-is-it-and-how-does-it-work/ ] linkte anlatıldığı şekilde;

SAPUI5 UI5, JavaScript, CSS ve HTML5 tabanlı bir istemci UI teknolojisidir. Sunucular, uygulamalarınızı dağıtmak, SAPUI5 kitaplıklarını depolamak ve bir veritabanına bağlanmak için devreye girer. SAPUI5'i kullandığınız ortama bağlı olarak, kütüphaneler ve uygulamalarınız örneğin SAP HANA Cloud Platform veya başka bir uygulama sunucusunda saklanır. Uygulamanız için iş verilerine erişmek için tercih edilen araçlar oData modelini kullanmaktır. 


## SAPUI5 nasıl çalışır? 
Başlamak için, SAPUI5’in birincil, temel geliştirme konseptini anlamanız gerekir.
SAPUI5, “kullanıcı arayüzlerini uygulamak için bir yazılım mimari modeli” olan Model View Controller (MVC) konseptini destekler. Bir geliştirici olarak, veri modeli işlemeyi, UI tasarımını ve uygulama mantığını ayrı tutmak için MVC'yi kullanmanız önerilir. Bu, farklı parçaların değiştirilmesine ek olarak UI gelişiminin kolaylaştırılmasına yardımcı olur. 

### Model:
Bu, başvurunuzda görüntülenen verilerin yönetiminden, geri alınmasından ve güncellenmesinden sorumlu olan kısımdır. 

### View: 
Bu bölüm, ilk kullanıcı arayüzünü yorumlamaktan ve oluşturmaktan sorumludur. SAPUI5 bağlamındaki görünüm, modeldeki değişikliklere dayanarak kullanıcıya sunum sağlar. Bir görünüm neye benziyor? Dizininde, görünümler “view” klasöründe saklanır ve XML görünümlerinin adları her zaman * .view.xml ile biter (aşağıda göreceğiniz gibi). 

### Controller: 
Bu en önemli parçalardan biridir. Bu, görüntüleme mantığını veri mantığından ayırmaktan sorumlu olan kısımdır. Denetleyici, kullanıcı etkileşimine ve görünümü ve modeli ayarlayarak “olayları görüntüleme” ye yanıt verir. Denetleyici temelde, bir sözcük işlem uygulamasında bir belgeyi düzenlemek gibi, durumunu güncellemek için modele komutlar gönderiyor. Görünümlere benzer şekilde, Controller ilgili görünümle aynı adı taşır (eğer 1: 1 ilişki varsa). Denetleyici adları her zaman * controller.js ile biter (aşağıda göreceğiniz gibi).

### Kısaca ;

UI5 projelerinde ekran tasarımları View klasörü altında oluşturulur. Bu dosyalar xml formatında 
hazırlanır. Ekran görünümü temel olarak iki yerleşim tipi kullanılarak belirlenir.
Bunlar HBox ve VBox olarak ikiye ayrılır. Kendi içinde Grid yapısına sahipsede ona ileriki konularda değineceğiz.


HBox yerleşimi kullanıldığında öğeler Yatayda hizalama işlemi yaparken , 
VBox yerleşimi kullanıldığında öğeler dikeyde hizalama işlemi yapar.

Öğelerin genişlikleri width özelliğiyle belirlenir.
Kullanımı width ="100%" ve width="100px" vb şekillerde olabilir.
Öğelerin yerleşimleri belirlenirken alignItems, justifyContent gibi yardımcı elamanlar da kullanılır. 
AlignItems ve justifyContent kullanılırken yardımcı elemanlar ise Start,End,Center ve Stretch ‘dir.

## Örnek kullanımlar ;
```
 <HBox width="100%" alignItems="Center" justifyContent="Stretch" class="personalInfo">
    <Label text="İş E-posta(*)" width="130px"/>
 </HBox>


 <VBox width="100%" alignItems="Stretch" justifyContent="Stretch" class="sapUiTinyMarginEnd">
    <Input  placeholder="user@example.com" />
 </VBox>

```

şeklinde örnek verilebilir.
Burada farklı olarak HBox ve VBox'ın class  alabildiğini de görebiliyoruz. İlk örnekteki
class css'ten gelmekte.İkinci class ise sapUi 'ın classı bu class boşluk vermemizi sağlar."sapUi" kısmı sabit kalırken 
Tiny yerine Small,Medium ve Large ta kullanılabilir.
aynı şekilde Sonda bulunan End yerinede Start,Center,Top yada Bottom gelebilir. 
Açıklamak gerekirse örnekteki "sapUiTinyMarginEnd" yazıldığı yerin "sonuna küçükten daha az boşluk bırak" şeklinde denebilir.
(####Not: Tiny=Küçücük(Küçükten daha az) ,Small=Küçük ,Medium=Orta ,Large=Büyük ,Start=Başlangıç,Center=Orta ,Top=Üst ,Bottom=Alt)
Diğer öğeler temel tasarım
öğelerinden olup Label,İnput,Select,Button ve CheckBox gibi örnekler verilebilir.


## Örnekler ;

Sample1: 
![Sample1](https://raw.githubusercontent.com/nimetapaydin/ui5-examples/master/orneklerinekranresimleri/sample1.png)

Sample2: 
![Sample2](https://raw.githubusercontent.com/nimetapaydin/ui5-examples/master/orneklerinekranresimleri/sample2.png)

Sample3: 
![Sample3](https://raw.githubusercontent.com/nimetapaydin/ui5-examples/master/orneklerinekranresimleri/sample3.png)

Sample4: 
![Sample4](https://raw.githubusercontent.com/nimetapaydin/ui5-examples/master/orneklerinekranresimleri/sample4.png)

