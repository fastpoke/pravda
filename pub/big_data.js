var BD
(function () {
function mkt(variants) { return '#{' + variants.join('#') + '}' }
function maybe(option) { return mkt([option, '']) }
function rnd(from, to) { return from + (Math.random() * (1+to-from)|0) }
// lowercase first letter mkt()
function lc1mkt(xs) { return mkt(xs.map(function (x) {
    return x[0].toLowerCase()+x.substr(1) })) }
// uppercase first letter mkt()
function uc1mkt(xs) { return mkt(xs.map(function (x) {
    return x[0].toUpperCase()+x.substr(1) })) }

var from_city = mkt([
    "Мурманска",
    "Москвы",
    "Омска",
    "Киева",
    "Донецка",
    "Луганска",
    "Одессы",
    "Новосибирска",
    "Новороссийска",
    "Владивостока",
    "Минска",
    "Волгограда",
    "Ставрополя",
    "Челябинска",
    "Биробиджана",
    "Сыктывкара",
    "Аддис-Абебы",
    "Куала-Лумпура",
    "Тель-Авива",
    "Санкт-Петербурга",
    "Вологды",
    "Краснодара",
    "Ярославля",
    "Твери",
    "Костромы",
    "Урюпинска",
    "Петрозаводска",
    "Уренгоя",
    "Самары",
    "Ужгорода",
    "Барнаула",
    "Абакана",
    "Улан-Удэ",
    "Читы",
    "Хабаровска",
    "Южно-Сахалинска",
    maybe("советской ")+"антарктической "+mkt(["базы", "станции"])+
        " Дружная-"+mkt([1, 2, 3, 4])
])

var to_city = mkt([
    "Мурманск",
    "Москву",
    "Омск",
    "Киев",
    "Донецк",
    "Луганск",
    "Одессу",
    "Новосибирск",
    "Новороссийск",
    "Минск",
    "Волгоград",
    "Мариуполь",
    "Челябинск",
    "Сыктывкар",
    "Биробиджан",
    "Аддис-Абебу",
    "Куала-Лумпур",
    "Тель-Авив",
    "Сыктывкар",
    "Санкт-Петербург",
    "Вологду",
    "Краснодар",
    "Ярославль",
    "Тверь",
    "Кострому",
    "Урюпинск",
    "Петрозаводск",
    "Уренгой",
    "Самару",
    "Ужгород",
    "Барнаул",
    "Абакан",
    "Улан-Удэ",
    "Читу",
    "Хабаровск",
    "Южно-Сахалинск"
])

var from_country = mkt([
    "России",
    "Украины",
    "Израиля",
    "Чехословакии",
    "Палестинской автономии",
    "Латвии",
    "Германии",
    "Австрии",
    mkt(["Северной", "Южной"])+" Кореи",
    "Внутреннего Тибета",
    "Республики Конго",
    "Канады",
    "Китайской Народной Республики",
    "Бразилии",
    "Австралии",
    "Индии",
    "Аргентины",
    "Казахстана",
    "Алжира",
    "Мексики",
    "Индонезии",
    "Судана",
    "Ливии",
    "Ирана",
    "Монголии",
    "Перу",
    "Чада",
    "Нигера",
    "Анголы",
    "Мали",
    "Южно-Африканской Республики",
    "Колумбии",
    "Боливии",
    "Мавритании",
    "Танзании",
    "Нигерии",
    "Венесуэлы"
])

var to_country = mkt([
    "Россию",
    "Украину",
    "Израиль",
    "Чехословакию",
    "Палестинскую автономию",
    "Латвию",
    "Германию",
    "Австрию",
    "Австралию",
    mkt(["Северную", "Южную"])+" Корею",
    "Республику Конго",
    "Канаду",
    "Китай",
    "Казахстан",
    "Алжир",
    "Судан",
    "Иран",
    "Перу",
    "Нигер"
])

var national = mkt([
    "Российский",
    "Украинский",
    "Китайский",
    "Чеченский",
    "Палестинский",
    "Американский",
    "Северокорейский",
    "Новозеландский",
    "Японский",
    "Индийский",
    "Монгольский",
    "Колумбийский"
])

var national_plural = mkt([
    "Российские",
    "Украинские",
    "Китайские",
    "Палестинские",
    "Американские",
    "Северокорейские",
    "Эстонские",
    "Новозеландские",
    "Индийские"
])

var where_politics = mkt([
    "Верховной Раде",
    "Госдуме",
    "Кремлевском Дворце съездов",
    "Белом доме",
    "областной администрации "+from_city,
    "управлении по делам молодежи администрации города "+from_city,
    "ГУЛАГе",
    "госнаркоко"+maybe("ко")+"нтроле"
])

var where_hole = mkt([
    "Туркменистане",
    "Таджикистане",
    "Казахстане",
    "Индонезии",
    "Намибии",
    "Буркина-Фасо",
    "Эфиопии",
    "Зимбабве",
    "Парагвае",
    "Венесуэле",
    "Ватикане",
    "Токелау",
    "Науру",
    "Бурунди",
    "Албании",
    "Швейцарии",
    "Венгрии",
    "Гондурасе"
])

var airport = mkt([
    "Пулково",
    "Домодедово",
    "Шереметьево",
    "аэропорту "+mkt(["Внуково", "Хитроу", "Бен-Гурион"])
])

var stuffed_toy_of = mkt([
    "Иисуса",
    "Ленина",
    "Каддафи",
    "Зигмунда Фрейда",
    "Сталина",
    "Ким Ир Сена"
])

var stuffed_toy = "чучело "+stuffed_toy_of

var cap_object = uc1mkt([
    "борщ",
    "сало",
    "маца",
    "айфон",
    "пирожок",
    "банка сгущенки",
    "крейсер «Аврора»",
    "спутник Глонасс-М",
    "Храм Христа Спасителя",
    "чучело "+stuffed_toy_of
])

var object_act_on = mkt([
    "борщ",
    "сало",
    "мацу",
    "айфон",
    "пирожок",
    "вермишель",
    "бидон молока",
    "банку сгущенки",
    "крейсер «Аврора»",
    "спутник Глонасс-М",
    "микропроцессор 80"+mkt([2, 3, 4])+"86",
    "полное собрание сочинений Достоевского",
    stuffed_toy
])

var did_action_object = mkt([
    "сожгли "+object_act_on,
    "съели детей",
    "погладили кота",
    "изнасиловали "+object_act_on,
    "воскресили "+stuffed_toy_of,
    "осквернили святыни",
    "похитили иконы",
    "избили "+stuffed_toy_of
])

var crippled = mkt([
    "бездомных",
    "безумных",
    "бесстрашных",
    "безобразных",
    "безработных",
    "безногих",
    "безблагодатных",
    "бестелесных"
])

var ministry_of = mkt([
    "обороны",
    "спорта",
    "сельского хозяйства",
    "культуры",
    "внутренних дел",
    "иностранных дел",
    "здравоохранения",
    "промышленности и торговли",
    "образования и науки",
    "финансов",
    "правды"
])

var unrelated_word = mkt([
    "«портянки»",
    "«шкварки»",
    "«баклуши»",
    "«провербиальный»",
    "«мультифора»",
    "«квадрига»",
    "«лапти»",
    "«посконный»",
    "«аппроксимация»",
    "«буржуйка»",
    "«Амфитрион»",
    "«#{под#}подпоследовательность»",
    "«сермяжный»",
    "«высокопревосходительство»",
    "«переосвидетельствоваться»"
])

var do_stuff = mkt([
    "повысить зарплату",
    "воскресить "+stuffed_toy_of,
    "погладить кота",
    "выкопать картошку",
    "вывести на стационарную орбиту "+object_act_on,
    "забыть слово "+unrelated_word
])

var out_from = mkt([
    "поезда",
    "автобуса",
    "вагона метро",
    "моторного дельтаплана",
    "сраного трактора",
    "собачьей упряжки",
    "трамвая",
    "самолета",
    "подводной лодки"
])

var where_biome = mkt([
    "тайге",
    "тундре",
    "степи",
    "лесостепи",
    "саванне",
    "тонкому льду",
    "спальному району",
    "битому стеклу",
    "Садовому кольцу"
])

var profession = mkt([
    "космонавт",
    "партизан",
    "министр "+ministry_of,
    "домовой",
    "саванный шимпанзе",
    "хохлатый олень"
])

var crafted = mkt([
    "айфон",
    "мусоровоз",
    "боевой лазер",
    "атомный ледокол",
    "спутник Глонасс-М",
    "моторный дельтаплан",
    "Храм Христа Спасителя"
])

var raw_person = [
    "Патриарх Московский и всея Руси Кирилл",
    "Великий русский писатель Александр Сергеевич Пушкин",
    "Исламский пророк Мухаммад",
    "Князь тьмы Сатана",
    "Депутат «Справедливой России» Олег Пахолков",
    "Высший руководитель КНДР Ким Чен Ын",
    // TODO: needs sex change
    // "Канцлер Германии Ангела Меркель",
    "Генеральный директор Первого канала Константин Эрнст",
    "Президент России Владимир Путин",
    "Премьер-министр Дмитрий Медведев",
    "Председатель КНР Си Цзиньпин",
    "Папа Римский Франциск",
    "Король Саудовской Аравии Абдалла ибн Абдель Азиз Аль Сауд",
    "Премьер-министр Великобритании Дэвид Кэмерон",
    "Сооснователь Google Сергей Брин",
    "Президент Франции Франсуа Олланд"
]

var person = mkt(raw_person)
var lc1person = lc1mkt(raw_person)

var person_generic = mkt([
    national+" "+profession,
    person
])

var imbecile_generic = mkt([
    "Б-г",
    profession,
    lc1person
])

var abs_quality = mkt([
    "святость",
    "духовность",
    "мерзость",
    "глупость",
    "массовость",
    "алчность",
    "коммутативность",
    "компланарность",
    "невостребованность",
    "застенчивость",
    "соборность",
    "державность",
    "народность",
    "богопочитание"
])

var bbpe = mkt([
    "пенсионерку",
    "революционерку",
    "канонерку",
    "феминистку",
    "морскую свинку",
    "учительницу начальных классов",
    "спортсменку",
    "секретаря-машинистку",
    "массажистку"
])

var hit_with = mkt([
    "прикладом",
    "боевым топором",
    "мусорным баком",
    "ногой с разворота",
    "лыжной палкой",
    "булыжником",
    "айфоном"
])

var innocent_attrib = mkt([
    "осуждающий взгляд",
    "болезненный вид",
    "пронзительный визг",
    "критику северокорейского режима",
    "приставания к котикам"
])

var cap_enemies = mkt([
    "Националисты",
    "Исламисты",
    "Фундаменталисты",
    "Сатанисты",
    "Программисты",
    "Ополченцы",
    "Черепашки-ниндзя",
    "Сепаратисты",
    "Котики",
    "Полицейские"
])

var national_attrib = mkt([
    "письменность",
    "духовность",
    "коммутативность",
    "компланарность",
    "школьная программа",
    "гравитация",
    "Новая Зеландия"
])

var seeking_refuge = mkt([
    "украинцев",
    "африканцев",
    "исламистов",
    "фундаменталистов",
    "ополченцев",
    "японских школьниц",
    "котиков"
])

var give_out_to = mkt([
    "миграционную службу",
    "пункт приема металлолома",
    "пункт приема вторсырья",
    "отделение полиции",
    "утиль",
    "районную психбольницу",
    "поликлинику для опытов",
    "приют для бездомных животных"
])

var without_class = mkt([
    "духовенства",
    "дворянства",
    "профсоюза",
    "Аллаха",
    "Сатаны"
])

var made_fight = mkt([
    "пьяную драку",
    "мировую войну",
    "ледовое побоище"
])

BD = [
    function () {
        return "В "+where_politics+" нашли "+rnd(10, 20)+" "+crippled+" депутатов" },
    "В "+airport+" у пассажиров из "+from_city+" отобрали и "+did_action_object,
    function () {
        return "Министр "+ministry_of+" "+from_country+" потребовал забыть слово "+
            unrelated_word+" к концу "+rnd((new Date).getFullYear(), 2020)+" года" },
    "Мизулина обвинила "+object_act_on+" в развратных действиях против детей",
    "В "+to_city+" привезли святыню, которая поможет "+do_stuff,
    function () {
        return "Выпавший из "+out_from+" пассажир пробежал "+rnd(10, 20)+
            " километров по "+where_biome },
    person_generic+" нашел себе работу поинтереснее",
    national_plural+" умельцы собрали из мусора "+crafted,
    person+" назвал "+abs_quality+" идеалом русского народа",
    "Жительница "+from_city+" ударила "+bbpe+" "+hit_with+" за "+innocent_attrib,
    function () {
        return national+" "+profession+" насчитал в плену у ополченцев "+rnd(10, 40)+
            "0 человек" },
    cap_enemies+" "+did_action_object+" в православном храме "+from_city,
    "В "+where_hole+" в рамках возрождения национальной культуры отменена "+national_attrib,
    "По сообщениям МИД РФ, "+lc1person+" съебывает из сраной Рашки, спиздив сраный "+crafted,
    "ФМС: Мурманчане приглашают к себе "+seeking_refuge+", а потом сдают в "+give_out_to,
    "В одном из храмов "+from_country+" снимали порнографию без разрешения "+without_class,
    "Голый мужчина в центре "+from_city+" доказывал прохожим, что он "+imbecile_generic,
    // FIXME: совсем ахинея
    // "Сотни "+seeking_refuge+" ищут "+give_out_to+" для совершения духовного обряда во славу "+
    //     without_class,
    "Житель "+from_city+" призвал "+do_stuff+" ради спасения "+crippled+" "+seeking_refuge,
    "Несколько "+seeking_refuge+" устроили "+made_fight+" в "+where_politics+maybe(" и сломали "+
        crafted),
    cap_object+" является важнейшей духовной скрепой русского народа, заявил министр "+
        ministry_of+" Российской Федерации",
    national_plural+" власти подадут иск в международный суд на жителя "+from_country+
        " за #{требование#попытку} "+do_stuff,
]
}())
