import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('concept');

  const glossaryTerms = [
    { term: 'Мультимедиа', definition: 'Совокупность компьютерных технологий, одновременно использующих несколько информационных сред: графику, текст, видео, фотографию, анимацию, звуковые эффекты.' },
    { term: 'Интерактивность', definition: 'Способность системы активно и адекватно реагировать на действия пользователя.' },
    { term: 'Гипертекст', definition: 'Форма организации текстового материала, при которой единицы информации представлены не в линейной последовательности, а как система явно указанных возможных переходов.' },
    { term: 'Векторная графика', definition: 'Способ представления графических объектов и изображений с помощью геометрических примитивов.' },
    { term: 'Растровая графика', definition: 'Представление изображения в виде набора пикселей, хранящихся в памяти компьютера.' },
    { term: 'Кодек', definition: 'Программа или устройство, предназначенная для кодирования и декодирования цифровых данных.' }
  ];

  const keyWords = [
    'Мультимедиа', 'Интерактивность', 'Графика', 'Звук', 'Видео', 'Анимация',
    'Интерфейс', 'Кодек', 'Форматы', 'Редактор', 'Презентация', 'Гипертекст',
    'Растр', 'Вектор', 'Пиксель', 'Разрешение', 'Монтаж', 'Эффекты'
  ];

  const hardwareData = [
    { name: 'Видеокарта', description: 'Обработка и вывод графической информации', icon: 'Monitor' },
    { name: 'Звуковая карта', description: 'Обработка аудиосигналов', icon: 'Volume2' },
    { name: 'Процессор', description: 'Вычислительная мощность для обработки данных', icon: 'Cpu' },
    { name: 'Оперативная память', description: 'Временное хранение данных при работе', icon: 'HardDrive' },
    { name: 'Монитор', description: 'Устройство вывода визуальной информации', icon: 'Tv' },
    { name: 'Колонки/Наушники', description: 'Устройства вывода звука', icon: 'Headphones' }
  ];

  const softwareCategories = [
    {
      category: 'Графические редакторы',
      items: ['Adobe Photoshop', 'GIMP', 'Figma', 'Canva'],
      icon: 'Image'
    },
    {
      category: 'Видеоредакторы',
      items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut'],
      icon: 'Video'
    },
    {
      category: 'Аудиоредакторы',
      items: ['Audacity', 'Adobe Audition', 'FL Studio'],
      icon: 'Music'
    },
    {
      category: 'Презентации',
      items: ['PowerPoint', 'Google Slides', 'Prezi', 'Canva'],
      icon: 'Presentation'
    }
  ];

  const graphicsEditors = [
    {
      editor: 'AnyTools Collage',
      presentation: 'Создание коллажей онлайн',
      example: 'Объединение нескольких изображений в единую композицию',
      link: 'https://anytools.pro/ru/img/collage'
    },
    {
      editor: 'Supa.ru',
      presentation: 'Онлайн фоторедактор',
      example: 'Обработка фотографий, применение эффектов и фильтров',
      link: 'https://supa.ru'
    }
  ];

  const workExamples = [
    'https://disk.yandex.ru/i/dZoURsUhvPMdng',
    'https://disk.yandex.ru/i/CgQrJeOSAch4XQ'
  ];

  const resources = [
    { name: 'Мультимедийные технологии (ИНТУИТ)', url: 'https://intuit.ru/studies/courses/658/514/info', category: 'Обучение' },
    { name: 'Обработка медиа-контента (ИНТУИТ)', url: 'https://intuit.ru/studies/courses/634/490/info', category: 'Обучение' },
    { name: 'Презентация курса (Google)', url: 'https://docs.google.com/presentation/d/1E7p1pU-GfaFWWwqFWBbVkBkrZUElpU7IsyVQxscpW1M/edit?slide=id.p#slide=id.p', category: 'Обучение' },
    { name: 'Слайд — Летописи.ру', url: 'http://letopisi.ru/index.php/Слайд', category: 'Документация' },
    { name: 'Вики — Wikibooks', url: 'https://ru.wikibooks.org/wiki/Вики', category: 'Документация' },
    { name: 'ВикиНГПУ — Добро пожаловать', url: 'https://wiki.mininuniver.ru/index.php/Добро_пожаловать_в_ВикиНГПУ', category: 'Документация' },
    { name: 'Обучающие олимпиады по Веб 2.0', url: 'https://wiki.mininuniver.ru/index.php/Обучающие_олимпиады_по_социальным_сервисам_Веб_2.0', category: 'Обучение' },
    { name: 'Unsplash', url: 'https://unsplash.com/', category: 'Медиа-ресурсы' },
    { name: 'Freesound', url: 'https://freesound.org/', category: 'Медиа-ресурсы' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-primary">Мультимедийные технологии</h1>
          <p className="text-muted-foreground mt-1">Образовательный портал</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            <TabsTrigger value="concept" className="text-xs lg:text-sm">
              <Icon name="BookOpen" className="mr-2 h-4 w-4" />
              Понятие
            </TabsTrigger>
            <TabsTrigger value="hardware" className="text-xs lg:text-sm">
              <Icon name="Cpu" className="mr-2 h-4 w-4" />
              Аппаратные
            </TabsTrigger>
            <TabsTrigger value="software" className="text-xs lg:text-sm">
              <Icon name="Package" className="mr-2 h-4 w-4" />
              Программные
            </TabsTrigger>
            <TabsTrigger value="graphics" className="text-xs lg:text-sm">
              <Icon name="Image" className="mr-2 h-4 w-4" />
              Графика
            </TabsTrigger>
            <TabsTrigger value="media" className="text-xs lg:text-sm">
              <Icon name="Video" className="mr-2 h-4 w-4" />
              Медиа
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-xs lg:text-sm">
              <Icon name="Link" className="mr-2 h-4 w-4" />
              Ресурсы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="concept" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Понятие мультимедиа</CardTitle>
                <CardDescription>Основные термины и определения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Cloud" className="h-5 w-5 text-primary" />
                      Облако ключевых понятий
                    </h3>
                    <div className="flex flex-wrap gap-2 p-6 bg-secondary/30 rounded-lg">
                      {keyWords.map((word, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                          style={{
                            fontSize: `${Math.random() * 0.5 + 0.9}rem`,
                            opacity: Math.random() * 0.4 + 0.6
                          }}
                        >
                          {word}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      💡 Для создания облака слов используйте сервис{' '}
                      <a
                        href="https://wordart.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        WordArt.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Icon name="FileText" className="h-5 w-5 text-primary" />
                      Глоссарий терминов
                    </h3>
                    <div className="space-y-3">
                      {glossaryTerms.map((item, index) => (
                        <div key={index} className="p-4 bg-card border rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-primary mb-1">{item.term}</h4>
                          <p className="text-sm text-muted-foreground">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                      <p className="text-sm flex items-start gap-2">
                        <Icon name="Info" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          Для создания подробного глоссария можно использовать Google Документы или Яндекс.Документы
                          и встроить его на эту страницу через iframe.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hardware" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Аппаратные средства мультимедиа</CardTitle>
                <CardDescription>Устройства для работы с мультимедийным контентом</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {hardwareData.map((item, index) => (
                    <div key={index} className="p-4 bg-card border rounded-lg hover:shadow-lg transition-all hover:scale-105">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon name={item.icon as any} className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-secondary/30 rounded-lg border-2 border-dashed border-primary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Presentation" className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Презентация</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Презентация по аппаратным средствам мультимедиа
                  </p>
                  <a
                    href="https://disk.yandex.ru/i/-qPwRm9lU7X-nQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow group"
                  >
                    <img 
                      src="https://disk.yandex.ru/d/-qPwRm9lU7X-nQ" 
                      alt="Презентация по аппаратным средствам"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="flex flex-col items-center justify-center h-full gap-2"><svg class="h-12 w-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><span class="text-sm text-muted-foreground">Открыть презентацию на Яндекс.Диске</span></div>`;
                        }
                      }}
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="software" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Программные средства мультимедиа</CardTitle>
                <CardDescription>Классификация программного обеспечения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {softwareCategories.map((category, index) => (
                      <div key={index} className="p-5 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon name={category.icon as any} className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">{category.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-secondary/30 rounded-lg border-2 border-dashed border-primary/30 mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Network" className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Интерактивный кластер</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Для создания подробной ментальной карты программных средств можно использовать:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <a href="https://www.mindomo.com/ru/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Mindomo
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        Google Рисунки
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        VK Доски
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="graphics" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Работа с графикой</CardTitle>
                <CardDescription>Online графические редакторы и примеры работы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>On-line графический редактор</TableHead>
                        <TableHead>Обучающая презентация</TableHead>
                        <TableHead>Пример работы</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {graphicsEditors.map((editor, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <a
                              href={editor.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center gap-2"
                            >
                              {editor.editor}
                              <Icon name="ExternalLink" className="h-3 w-3" />
                            </a>
                          </TableCell>
                          <TableCell>{editor.presentation}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{editor.example}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm flex items-start gap-2">
                    <Icon name="Lightbulb" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Дополнительные редакторы можно найти на сайте{' '}
                      <a
                        href="https://sites.google.com/site/badanovweb2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        badanovweb2
                      </a>
                    </span>
                  </p>
                </div>

                <div className="mt-6 p-6 bg-secondary/30 rounded-lg border-2 border-dashed border-primary/30">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="ImagePlus" className="h-5 w-5 text-primary" />
                    Примеры работ
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Изображения, созданные в online-редакторах
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {workExamples.map((url, i) => (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-video bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow group"
                      >
                        <img 
                          src={url.replace('/i/', '/d/')} 
                          alt={`Пример работы ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="flex flex-col items-center justify-center h-full gap-2"><svg class="h-12 w-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-sm text-muted-foreground">Открыть на Яндекс.Диске</span></div>`;
                            }
                          }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Обработка звука и видео</CardTitle>
                <CardDescription>Работа с аудио и видеоматериалами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Video" className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Видеоматериал</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Видео, созданное в рамках лабораторной работы
                    </p>
                    <div className="aspect-video bg-white rounded-lg overflow-hidden border shadow-sm">
                      <iframe
                        src="https://rutube.ru/play/embed/5a3eb5bafe32be5d76a1a4d6acfbd65e"
                        frameBorder="0"
                        allow="clipboard-write; autoplay"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 bg-card border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Music" className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">Аудиоредакторы</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">Audacity</Badge>
                          <span className="text-muted-foreground">— бесплатный редактор</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">Adobe Audition</Badge>
                          <span className="text-muted-foreground">— профессиональный</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-5 bg-card border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Film" className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">Видеоредакторы</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">DaVinci Resolve</Badge>
                          <span className="text-muted-foreground">— бесплатный</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">Premiere Pro</Badge>
                          <span className="text-muted-foreground">— индустриальный стандарт</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 bg-card border rounded-lg">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Settings" className="h-5 w-5 text-primary" />
                      Основные понятия обработки медиа
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div className="p-3 bg-secondary/30 rounded">
                        <strong>Кодек</strong>
                        <p className="text-muted-foreground mt-1">Алгоритм сжатия данных</p>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded">
                        <strong>Битрейт</strong>
                        <p className="text-muted-foreground mt-1">Скорость передачи данных</p>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded">
                        <strong>Монтаж</strong>
                        <p className="text-muted-foreground mt-1">Сборка финального материала</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Полезные ресурсы</CardTitle>
                <CardDescription>Каталог мультимедийных интернет-ресурсов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Bookmark" className="h-5 w-5 text-primary" />
                      Каталог по категориям
                    </h3>
                    {['Обучение', 'Документация', 'Вдохновение', 'Медиа-ресурсы'].map((category) => (
                      <div key={category} className="mb-4">
                        <h4 className="font-semibold mb-2 text-primary">{category}</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {resources
                            .filter((r) => r.category === category)
                            .map((resource, idx) => (
                              <a
                                key={idx}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-card border rounded-lg hover:shadow-lg transition-all hover:scale-105 flex items-center justify-between group"
                              >
                                <span className="font-medium">{resource.name}</span>
                                <Icon name="ExternalLink" className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </a>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Образовательный сайт о мультимедийных технологиях © 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;