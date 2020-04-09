import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ArtistComponent } from './artist/artist.component'
import { ArtworkComponent } from './artwork/artwork.component'


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'artist',
        component: ArtistComponent
    },
    {
        path: 'artworks',
        component: ArtworkComponent
    }
];

export const routerModule = RouterModule.forRoot(routes);