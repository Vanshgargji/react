Episode 2 *************
# react by akshay 

we used cdn links to add react
we have initiated npm using npm init
package.json is an configuration to npm 
installing parcel for bundling using npm install -D parcel
-D means it is a dev dependency , dependency which is used while we are developing
/^ carat . it auto matically updates the versions of dependencies
/also package . json keep the track of all the version of all the dependencies
Transitive dependencies - we have installed the parcel dependency with it parcel's dependencies also gets installed with it and with those dependencies their dependencies are also installed . that's why node modulus folder is too much big

every dependency has its own package.json file
if i have package.json and package-lock.json i can generate node modules again if i lost them
npx is used to execute the packages . like npx parcel index.html
cdn is not the prefered way to add react  . so we are doing the same using npm install to install both react and react dom
we set javascript file as module bcoz we are doing the import export thing in it


#Parcel 
- Dev build 
- Local Server 
- HMR = Not Module Replacement 
- File Watching algorithm written in c++
- Caching faster builds 
- Image Optimization 
- Minification 
- bundle 
- Compressing 
- Consistent Hashing 
- Code Splitting 
- Differential Bundling to support old browsers 
- Diffeent dev and prod bundles 

adding parcel-cache and dist to git ignore file bcoz it can be generated again by npx parcel command 


Episode 3 *************
#swiggy app

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

import Header from "./Header";
import { Header } from "./Header"; // ❌ Duplicate identifier
can't use both simultaneously , if some bundle support that still it's not valid to use 