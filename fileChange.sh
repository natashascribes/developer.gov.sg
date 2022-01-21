#!/usr/bin/env bash
for d in collections/_products/categories/*; do
    if [ -d "$d" ]; then
        # Go through each category folder
        for file in $d/*;do
            # Only if it's not already in a folder
            if [[ -f "$file" && "$file" != *"index.html"* ]]; then
                new_folder=${file%.*}
                prefix="collections/_"
                # Removes prefix from path
                redirect_from="redirect_from: /${new_folder#*$prefix}/"
                match='sub_collection_render: true'
                data='_data: single-level-nav'

                if grep -q "$data" "$file";then
                    echo "${file#*$prefix} already contains _data: single-level-nav"
                else
                sed -i "" "/$match/a\\ 
$data\\
" $file   
                fi

                if grep -q redirect_from: "$file"; then
                    echo "${file#*$prefix} already has redirect_from:.Please add in manually."
                else 
                sed -i "" "/$match/a\\ 
$redirect_from\\
" $file         
                fi
                mkdir $new_folder
                extension=${file##*.}
                # Renames file and move into new folder
                mv "$file" "${new_folder}/overview.${extension}"
            fi
        done
    fi
done