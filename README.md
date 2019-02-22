# ui5-examples
UI5 projesini çalıştırabilmeniz için node modul kütüphanesi olan browser-sync'i ilk olarak şu şekilde kurmanız gerekmektedir.
     npm install -g browser-sync
kurulum işlemi tamamlandıktan sonra projeyi git yada terminalden aşağıdaki komutu;

   browser-sync start -server --files '**/*' --no-notify --host localhost --port 8101

kullanarak çalıştırabilirsiniz. 

Kısaca UI5 ve UI5 Element

UI5 projelerinde ekran tasarımları View klasörü altında oluşturulur. Bu dosyalar xml formatında 
hazırlanır. Ekran görünümü temel olarak iki yerleşim tipi kullanılarak belirlenir.
Bunlar HBox ve VBox olarak ikiye ayrılır. Kendi içinde Grid yapısına sahipsede ona ileriki konularda değineceğiz.


HBox yerleşimi kullanıldığında öğeler Yatayda hizalama işlemi yaparken , 
VBox yerleşimi kullanıldığında öğeler dikeyde hizalama işlemi yapar.

Öğelerin genişlikleri width özelliğiyle belirlenir.
Kullanımı width ="100%" ve width="100px" vb şekillerde olabilir.
Öğelerin yerleşimleri belirlenirken alignItems, justifyContent gibi yardımcı elamanlar da kullanılır. 
AlignItems ve justifyContent kullanılırken yardımcı elemanlar ise Start,End,Center ve Stretch ‘dir.

Örnek kullanımlar ;


 <HBox width="100%" alignItems="Center" justifyContent="Stretch" class="personalInfo">
    <Label text="İş E-posta(*)" width="130px"/>
 </HBox>


 <VBox width="100%" alignItems="Stretch" justifyContent="Stretch" class="sapUiTinyMarginEnd">
    <Input  placeholder="user@example.com" />
 </VBox>

şeklinde örnek verilebilir.
Burada farklı olarak HBox ve VBox'ın class  alabildiğini de görebiliyoruz. İlk örnekteki
class css'ten gelmekte.İkinci class ise sapUi 'ın classı bu class boşluk vermemizi sağlar. sapUi kısmı sabit kalırken 
Tiny yerine Small,Medium ve Large ta kullanılabilir.
aynı şekilde Sonda bulunan End yerinede Start,Center,Top yada Bottom gelebilir. 
Açıklamak gerekirse örnekteki "sapUiTinyMarginEnd" yazıldığı yerin "sonuna küçükten daha az boşluk bırak" şeklinde denebilir.
(Not: Tiny=Küçücük(Küçükten daha az) ,Small=Küçük ,Medium=Orta ,Large=Büyük ,Start=Başlangıç,Center=Orta ,Top=Üst ,Bottom=Alt)
Diğer öğeler temel tasarım
öğelerinden olup Label,İnput,Select,Button ve CheckBox gibi örnekler verilebilir.

