'use client';

import { copy } from '~/libs/copy';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './cores/dropdown-menu';
import { ArrowTopRightIcon, MapPointIcon } from './cores/icons';

export default function MapInfo() {
    return (
        <div className="relative">
            <p className="text-sm">
                <b>Gedung Putih Jami'ah</b>
                <br />
                Jl. Tj. Raya II, Saigon, Kec. Pontianak Timur, Kota Pontianak
                <br />
                Kalimantan Barat 78242
            </p>
            <p className="mt-2 text-xs text-gy-8">+62 896-9356-4253</p>
            <div className="absolute top-0 right-0">
                <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-full transition-opacity active:opacity-60">
                        <MapPointIcon className="h-6 w-6 text-gy-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="text-xs p-1.5">
                        <DropdownMenuItem
                            onSelect={() =>
                                copy(
                                    'Jl. Tj. Raya II, Saigon, Kec. Pontianak Timur, Kota Pontianak, Kalimantan Barat 78242',
                                )
                            }
                        >
                            Salin alamat
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={() =>
                                window.open(
                                    'https://www.google.com/maps?ll=-0.041248,109.361855&z=20&t=m&hl=en&gl=ID&mapclient=embed&cid=1019364236068666717',
                                    '_blank',
                                )
                            }
                            className="flex justify-between"
                        >
                            GoogleMaps
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={() =>
                                window.open(
                                    'https://www.openstreetmap.org/#map=18/-0.04121/109.36190&layers=N',
                                    '_blank',
                                )
                            }
                            className="flex justify-between"
                        >
                            OpenStreetMap
                            <ArrowTopRightIcon />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
