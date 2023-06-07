import './globals.scss'
import NavLayout from '@/components/NavLayout'
import SideBar from '@/components/sideBar/SideBar'


export const metadata = {
  title: 'Смотреть фильмы онлайн в хорошем качестве',
  description: 'Просмотр фильмов в хорошем качестве',
  verification: {
    yandex: '9767288bdb7882e1'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavLayout>
          <main>
            {children}
            <SideBar />
          </main>
        </NavLayout>
      
      </body>

    </html>
  )
}
