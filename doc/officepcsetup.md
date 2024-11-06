#### npm install -g @vue/cli
   - Error: vue is not recognized as an internal or external command, operable program or batch file
   - Limitation: unable to edit global enviroment variable

### How to solvo
1. Find out where npm installs global packages
   - ```npm root -g```
   - e.g. `C:\Users\YourUsername\AppData\Roaming\npm`
2. Copy the node_modules of vue to my project folder
   - #### From
     ![image](https://github.com/user-attachments/assets/2cc15030-97d3-4fed-a0a2-d0a8397239ee)
     ![image](https://github.com/user-attachments/assets/c788be58-c391-405e-8a82-f42b905234ac)
   - #### To
     ![image](https://github.com/user-attachments/assets/0bf54a3f-0b17-4524-98a9-f1c4f113427f)
     ![image](https://github.com/user-attachments/assets/c7e18289-aff6-4104-9297-338aad54c87a)
3. change the package.json
    ![image](https://github.com/user-attachments/assets/6e70e3d3-0ca2-482d-9c5e-bff77fbc2780)
4. Run the Script
    ![image](https://github.com/user-attachments/assets/554b83a1-daf5-47b6-9b61-2067d9375334)




   
