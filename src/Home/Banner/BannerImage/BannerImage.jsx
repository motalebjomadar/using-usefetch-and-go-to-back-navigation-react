

const BannerImage = () => {
    return (
        <div className="">
            <img className="h-96" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEA6wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEkQAAIBAwIDBAUIBggEBwEAAAECAwAEEQUSEyExBiIyQRRCUWFxBxUjUoGRobEkMzRicsEmQ3OCktHh8GR0orIWN1NVg9LxJf/EABsBAAIDAQEBAAAAAAAAAAAAAAECAAMFBgQH/8QAMREAAQQBAgQEBQQCAwAAAAAAAQACAxEEEiEFMUFREyJhoQYygdHhM3GRsRTwFSPB/9oADAMBAAIRAxEAPwCWlSqeK3Z/H3Vrq18yJA5qJVZ/DVuK2VPH3vyqVEVPBXaQlUOkJ5JUqVKlVSVKlSoqJUqVOAoEgCyma0uNBNpVMlvI37tSG0/erIyeO4WPsX2ew3/C3MP4b4jlbhmkd3bfn2VYfZSqVreRP3qiK7PHWBkfFUh2gZX77rqsT4JhG+RKT6Db35rmahu5lt4Wkbc3QKq+IknAA95JAqaqWo9yaxZ/1S3I3ewZRgM+3vED4kVjv4tm5DqfIa7Db+l0UHAeHYrbjiF9zv8A2qzwz+K6vY7Zm5rEu049xLdfsAp0STJMkF00e6TPCljUhXwMkEZODjnjJyBnPUCjqPcvJ1dljZmO1mwpyVQKSSOajDAgHr5eyzAuywsYkVlZrsmJWU5CCRj58wNmR9oFVPZbQ4m7+y0GP0mm7UrM8fo8LSysqxRqSzewDmaoyC74PHuJVsovqsoLD2biTgH3AfbRLVjtsGZvDHIjv/CHBP4An7KG9tbeS70VViaT9oi3Kig5G8DmCDyGc/Z7KpgaCWg9TStlkIBPZJLiSJ4vSGjkgmwI54+XM9AwyRz5YIPMkchViaVYoXll8KrlvP7h5n3VNqUaxaVwPE21I0baMlsgA4AwOeDyGB7gKWqww8GJmXurPGW93fGD7gDg58sUKa9zfUptZAKpRi5l70svo3dzwI9pYDy3Eg5PwGOvM9aa0k9p3riTiQbu9JtAaPJ5E45EeWQBj38yB+urd2+ts1gu1vRoAsvAViN02GGcZIxzxn38utWbX0v0PV4tSZpltpXjVyojMibQR0ABPPGRivQYvKHbUa26719+6qEo1Fu991fuZ1t4Wlbd3cDavUkkAAZ8ySB9tQej3Mqbri7aNv8A04MBR7skEn48vgK7eI0VtbNcK22ORDJ15eWT8CQfszWf7Xabq13cr80mbhTx8OdNwEZAPInn154Pn0pceIOIbqAu9z6J5pCBdX6I+JJLdl4svHgkYDi8gyEnAzjkQemRjBx1zkS3l3BYwtPdSrHEvrN+Q9pofb2C6Z2eisUbdLtCblUc3Y9QD7Cc/AVQ1iNdQ1Xa67lt+Sq3TceZOOmef4VZFjNyJavbffvSR8zomeuy7J2101H7kd1Iv1lUAfic1Mva/SGALSzKT5GI8vupHRrbULPam2P9/aOeOtZa70pra5khIzsOO70rX/4nHI5H+Vmuz8hp2IP0XqkNuqd5+81TUqVd1a+LucSd0qVKlUSpUqeis77FVmZvCq8zRvTuzF7cFWuP0eP97m33f51W+VkYtxXpx8SbIdUTSUBq3FYXMqK3BZY26OykD7PbW3sNCsLLayRcSRf6x+Z+zyFFGRWTay932Vm5Ge4tIh2Pc/ZdLh/DYsOyXfQfdefxaZGv61t3uHIVZNpH6q7f4a0l3pET963+jb2eVB7i2nt22ypt/e8j9tcTxF2e43O4ke38LtuH4mDjj/oYAff+Shz2rJ4O9UJGzx0SrjKr+Ksha+pDa4RV17VfV7tV3hkX1aCa1WaCJ/V/w1XnsFlRon2srLhlbzFXaVEGk1lAjZalb923u42iXw8eEyMPYMhhkD3jPtJrtvabJmnllaadlxvbACD2ADoM8/MnzPIYOU1o1fxrTmVxQFBDiKoraXNv3bK5jWL1UnhMmweQUgqQPcc0Ze1X1GqFoJU9X/DSteW7JzRQ+GzbjLPeT8aSPwbV2ohIwSBknJHLJJ88YyasyIsqNFKqsrKQyt0IPIg0+uVHPc42UQ0BU4oru1+iikjuYF8PFYhx7AWAO74kA8hkk86Qtp7iZWvWj4UbZSCPO3IPIsTzJHUDAAPPmQCLlKn8Z3Pr3Q0BcdVdGVlVlZcMrdCD1BFUHsblE22VzHs9VbmIy4HsBDKcfxE0QpUrXlvJEtBVCPTF43HuJ2kl9XugKmeu0e/2kk++s/b2avf6n6Vcq0HEZFVmwdx55HMdMYotrss6QtPwJGs4+48iybeHk4MmepxnoPYaxHZNtl60F6knE4hTiryzgkE5PXnXRcOx3Nb4jjuRyWbkytsMAWs0234WmrxZG2x+FueT16gnl1rPaiFa9lPC6n6poq2sW1ojWbytO1ux2s2BxOpGSOpHTPnTbdru7iE8do7K+SCFJzz91azQQF4HOaStlSpyqzuqquWbwqvU1oNM7L3NxtkvG4Mf1V8Z/kK6SSVkYtxXyjGw5sl2mJtoDHG8r7YlZmbwqFyaK2GhSSv+lNwlXxKuM/f0FbKysLSwi22sKrnqfM/E0LiKvNKr+FmI++vA/Nc69Gy6jF+H446dOdR7dPyrek2llax/o6xr073Ik56c/fRJ5Y0xvkVd3TcwGa8w7N9jtYtdS0uW4EbWyH0a6QuG2wQFXtiBnrvTJ8xuPsrU9ptIu73tHod9FbNNBaJOJdnCLAvs28pORHdOSOY8qznuLjZXRxRsjbpYKC1VNLqu3c3i6e+nVkO2GjanqV/BfWCw79N4c1qsnWR+IDIM5AXKKFyQeTnpzpVYtZJIsXekZUX6zECuScNkbftK+eemKznbbSL3WItISwWPfBfcaRpVDKi8GRclSRu5svIVAdFvT8mDaGkLLffNTWqxPKrd/hlcbumM+fsoEWoitxpUMq8SzkUe7dlf9KEzwSW77ZVZf9+Ro32et2tNKhglhkhZBgrIsYPxxH3cfj7aISxpKm2RVZffWXk8Kil3Z5T7L1RZbmbO3CyNKi95o3rWrf3G/kaEujI+11ZW+q1YE+LLAaeFoxzMkHlKjeGN/VqvJat6veq3Srzq4EhDSGTx1yiTKr+JaryWv1W/u0EwcqtKnOjJ4lptRMmsiv41qF7VfUarFKojZVB4ZU9Wo6J0x4lfxrUTByH02RtiM3+H/wDPOrb2v1G/xUPtb5rTUryKW2jnXuCPd1Q4B5Hp1wele7h+IMqbQTQ5ry5mV/jx6huihso7jR4ItqsrRbHVunMc8isLqfY1bvVbz0W54FnGiiz4fMAk5YEezOfvrd3XaOS7h9GtdLte93PCWxnlyAxWJ7UX8likUVvc8NVx3I1wXPLGT5D/ADFdNNBMCGQ7Hv2WTHlROBL/AOO6f2Q+TiS71VpdVuY20+2VXdo2A4hIzt5EkAeZOD8K9HPa62sf0Sxs/wBGh7se3ujA9gA5V5t2U9Jitr6748kcV+w3Ivhk2knfgdBkkDHUAZonwGPMBft61otjoU42s+STfZFO1HaG77G6lHbadbWj7oA7PMpL5JI6gjA5dK2es67c6f2eub6KONp44OIu7O3OB1Gc4+2vN/lehji7QW0US7V9DHvJO5uZJ5k+80a1/tTPd9mbmzbs3q8CyW+zjzQEInId4nHStF0AkjieW7nnuvHGWwl8bNgOSu9k+3N7rVvfNfwQq0OwJwVI67s5yT7BVHtL2lu9EtoJLVYWaaQhuIpPlnlgihvyWwrLZ6vu9Vovyeo/lFi2abY/2rflT+BEMvQBt+EPFeYdV7r0LsfrTano9tc3G1ZZFJZV5DqRyyfdWd7W9u9W0ntI2mWEFm8X0e1plbOWA6kHpk+ypuw9kz9m7GVPWjP5msR27DW/bPv+rwj7TyANV4+PG/IcCNt/7TyTOEQIPZbbXu1nafsw8Emr2OmXNvMxCtaSOOY8iSORx7j0ra6NqcGsaVbaha54c6bgG6g9CD7wcivIu3HaVNehttMslkkl4+9t0ZU5wQAAQDk5rY9jmn0Ts9bWN0rcVdzsvsLEnHL2ZqufGAga4inf+J45z4hF2FU1/t1qmndsvmWCC1a248Me5lbfhwpPMHHrHyr0OV9kTMvqqT+FeE9qLji/KJx/+Jt2+4J/lXscmpQPDL3l8B/I0uVjtYyPSOY3RhmJLrK890H5Ub241W2h1aC0itJG2SSRqwKZ5A5JIwD191eh9ptRl0ns/fajbrG0sERdVk8OffivE7XQlvew8up26/pNpdPxF83iKIT9xyfgTWs0/tH88fJnqtpcSbryyttjburp6re84GD7x769GTiRFzXRjYGiFXDO+iHHmLC3/ZbUpdW7P2WoXKoss8e5gmQuckcuZ9lZTtt2we31eLQdIso7vUGKozy5wjPjCgAgk4IJOQBke/B35P3/AKGaV/YfzNea6NJ6R8rW6X/3Cb8A4H5CvNFixPkl1ttrb2V0k7mtZpNE1ui+vXHajsxDBd6ounXNtI2xuBuBVsE4yenIHBwelH7O5ivbOC5g/Vyxh19uCM8/fVntX2l7O2szaZr1tJPt2ybTbl09xz0zV7SBpOt6PBc6TFwLbvJFtQJjBII2jljINYXE+Ftlga+KPS702BH3XvxMsskLXuse4Q+lVi6s57XxL3frL0/0qvXJPjdG7S4UVttcHCwkRUElqreHu/lU9KkTWh8kTJ4l/vUyidQyW6v4e7UThypUqkkhZP8A7VHQTJVnLdpJbm8l3LtaUjvZxyOB05nkOlaOsqkvC1u5ifaqyS9128PPFb/ANpXkjosnioJjaB3Vq9vZLRINjLGrMdvdxkAEk48hy/GvPLgz692hgs13KrN3m80Ucyfjj8SK12vW97fXm63XiRQxsjMrDBJIzj7AMfGhvYbT5In1DUb2No5dxhVZFwQBzP3nA+yunDgeSxwwx2XBaYQRom1F4dtbqAqr0AHIAY+Aq0ttLKodOSsMjNRQrv01mf4tU6O4UBenlTqgm0N+WY/0hg/5Mf8Ac1ehdrj/AED1D/k/5Cnaxqun28NtPdWCz8aBp+8ikpGoUnmepG8YHnzom9zA2pLpTwbuJbGbvKCu0MFwQfiKZ2VbY218nurBDTnG+a8x+Sk/oetf/F+T1z5Sz/8AytP/ALVvyrcaVqOn6r6Xa2Vp6JLD+tTYqnmSFPLqCBkH2H2giqWsXUGj2y+m2npP6x1XapwqIXY8/PAwB5kj41f/AJgM3jV9Poq/AIZ4dq38nY/ofpv9mf8AuNee/KH/AOYX96D+VelDV7bT7iCzSBvpLZ504agKFV41Ix5EmQH7DXNQ1PTYu0ltplxZRyXNwqlZSik89+OvM44ZJ9mRVUeV4czpK537p3w62Bt8liPlh0bhXNtrES92b6GXb5MMlT8SMj7BWz7JXkevdnrS8fa0u3ZP/GOR+/r9tGNTeNbCaWWBbhYYzJw3xg4GfMEZxmh7arBp1lpUkVgsfzlOsSRRcgpMbOCcD2IRyHUjy50j8ouhbGRuOvoo2Cnlw6ryrtdEqfKO0H/E26/eE/zr0+70f6GXb3e6fyqfU77TbTW9PtLi0jknvXIEuEyhAJUnPM5IwMZ54qtq3ayy0zWItKuLeZpZpYI0ZduDxXCE9c4Usmf4ximlzC9rBXyhRmPpJ35rGfJvaz3HZ+dom7vpLBl8j3Vz+dZPX9Puezmq3Nqu5YLiIhfY8ZPMfYQPuFe9pbR28LLawRr57FUKCfsHw50CTUrPUNB0/VZdNVvTWjEEUm0kcQgDJIwPacZ6edXs4hpkc8t2PRVOxSWgXyQPshqc9v2b09dvdWLu/eax+oTtonbuLVWjb0aS54273EYcfEZJx8K9Dvdb0+00HT9TSyk9GvYzJHEu0FFELzHIzjO2MjkcEkc8c67rz6Xa/N8V7Asi38qxruxgbiACQeo3Mg5Z656AkLHlsa9ziNnc1HwvIA7LN9vu1Nlqug/N2myrczzOHbhc9iJzJOOnQfjRz5Mr2OLshaRs3heX8ZGqKTS7G01hdMt7Lhy3EXER41AV1BIfOPYdmc/XGPPCttOkf0mK3jaNbeUx+EAHkDlceXP8DUe+J0XhMG12o0OD9blsxdRv3e61ULrT4n71q239zy+z2VnjBqEXg3V1b+9i8atWdkYEWQ2nheqLKfGbaVddWR9rrtam1WbV2fu3EVOhuo5e6jd76rVy2bwmXGtzfM3/AHmtrHzWS7HYqelSpVkr3JVDJbq/g7rVNSoKIHrOmyXFtt3Mu3mu3oeXQ+4/EVkLXUFSZorjuyw8vRrtTlP4X6/DP316XQ3VdDsdTT6eBd3qyLyYfAjmK08HPMHkdy/pUyxa91lba4tE71vGytJzb6Y9T7s4xWigsYn0224q96RS/wBhPL8AD9ted6tfR6T2hl0zhtJbQsokbcN4GATj2nnW/s9Q+cNNgvolaOKbmiNy2IOSj7gK6vGFgPHIrEy5BWhN9AaLdFFJ3WXu7uie7300WV4vJJNy+0R/61Ol1sm+l3bWp7XK58VeteBaeGWx1BI1nghmWJsoksYJQjzGRy+yiiCB5uOqrxduzftG4KSCVz1xkA491Y145In3RK3dohYav6txuVvrf760HRA8la1/dHvRraGR5YreGORkCM8cYBKjJAJAyQCTgeWT7ajubK0vkRb22huVVsqssasAcEZAI5HBI+BNdjullTxL/EvT/SplquqCe1E9jbTPFJLbQyNC2Y2kjBKHIOQT05gdPYKdLaW0tys8ttC0642ytGCwwSRgkZGCTj2ZPtqwldNAoFMcK6MrqrKy4IbmCD1BHmKZLZ2lxFFHcW1vJHCwMSPGpEZAIBAIwDgkcvIkVIVpuaFWoHUlNb29x+vhhk7yn6RAeaHcp5jqDzHsPMVFNYWNxMs9xaW8kq4KvJEpYEFSCCRkYKIfio9gqXdXc1NKOpS5qt6DZehpZ+iW/ocagLBwl4YAwQAuMDGBj2YqXNdzUpQFQTafZXEMUE9lbSQQ/qo3iUrHgFRgEYHIkcvIkVJNbwy/rYY5OW3voDyBBA5+WQD8QKfmlmpSFprwQPOs7RxtLGrIr7RuAJBIB6gEqMjzwPZTUt4U37I1XiNvfaoG84AycdTgAZ9wqWlmoFCo2gVqiaxif1asg08Gm1uCGlpQibSYn9WqUuhRep3a0TGm4pxK5KYx0WeWxmi7vi/i61GwZPHWkKrUM1pFKnf+/wA6xM7hcc3ni8rvY/ZaGNmvj8r9wgNcqzdWctv+8vt/z9lVq5iSJ8TtLxRWyx7Xi2lKu1yuMe41VgWUxNLxNLefW+0+rtbxcSVnkfu+ziYB5+4D76O22mdpok4UU80EUa4VWlG0D2AAn8qqfJtFJ88X0/8AVNEU3e1twOPu/Ot9cD1v9mvosXlYGrlpTbyVmodH1mX9o1ll72Po1yfv5VOOzUmOes3v+KjMLbE8Le3/AGak4jfV/wCoU6ptaS4RUTveGqM1urpuo1MN6d1d25e6vtrNS6r6P9Eloy7fVaTpTtaTyTkhOS5nsX3J3l+rRfTdZguO6jbW+o3Q/A0GhulvU7i7WXxJ/MUI1Fp7ebuKu1vCy+f+tFwHVRt9F6XBMr93wt9Vqmrz3Su0bJtiuu8v4j4GtfY6ksqbkbiL/wBQ+Iqh0fUJ9XQonXCKbHIrpuRqdmkRUZWuZqTNcIooUm5pZrhSuUUE/NdBqLdXd1SkLVlRTHqoup2np/zdx4/TOHxOF620EDd8MkffUVzqlpFc+jSz7ZVgadl2k4jUgFiQMAZPn154zg0oCYnZXd1d3UIGv6b6B6dx29G37N3BfO4+QGMn7qfPrWn2/o3FnZfSlzEvCckg4GSAOXUdcdaOyXdE91LNU7W+trua5it5N0ttJw5U5go2AQCD7QQQehBqKDWNPuPSeFP+ybjO3DYBMEg8yMHGD0z0qKWSiWaW6hnz5pvoHp3HbgcTh7uE+d3sC4z+FW3u7aGwa+ll22yxcRnZT4cZzjGenljNTZNRVgmhd3Y+tF/h/wAqdJr2mxWEV887LBI5RG4L5LDORtxnyPl5UrrVbKK5gtXkbj3Cgxrw2OQTgEkDAzg9cdK82RixZLdLwropXwm2lDiKiuW2W8jfVjJ/A1eW5sb68lsYpP0uLxfRtgYxnnjB6joaoaxFLb2F2rr/AFD/AAPdNcvk8OkxpBe7b5rZiymStPdeR/JfeSfOt9Y/1TRcZfcQQD94I+6vQrk9zbXmHycHhdrdvqyW0ifHoR+Veoyj92u0aufkG6jij2O21u6zA/DkB/KpSjZ8X/TUSN3KkB5UyqRrRNSguE4STxyRbsI8cgIBHlkU3WLWC7eVrdo2uYcceJWBYZGQSBzBxz59RWb7L6Ve6VbNFezqyrHEkSKwOwIignIUEkkHGc8gKemlaknzvfRTxyXN1ptwk6RbhIXyzRFSPEQGK55HkKvfqbTwP3VURabZf7LmJLeZZYu6y1ekubS7h2yyxq3DZ2iZu8AMZYDOcDI5+8Vm9R7P6taaOsrRMy3N5bP6NHK5MagIHDEgYyQxYcwM1FZaTqFi1pI08bSw2MttI25idzlSMEjJAAxnryHKgTrFgK4AN2JVmWJfFFJxImUOkq9HUgEEfYRUtnfz2L7lkZdvrf78qZBoly82mcWSOZY7GGOVmnYGOSMgOygDvE5xzx78gmg172d1KGbUop5Y9l1BJGm2RipJJKsQRywCAeZxjA5YqrcdFdsV6LpXaa2uLn0aWdY7nYH7vQqSQCR5DIPOtNFdb+63db63ka8SGnXuyRVkWHdp4gThyH6OQE8xyHLmOY50QtoNSSzhgmmX0Zb4zmBZmKrGUZQgOATzIOOn3UpF9FKrqvZGKom522qvrN0pwrBeizat2B+ZWuY5r5rFIX4sjYMgA55xkgkdcVe+aNSuO0dpfRTxx20fALLx33RKiOHiVMYYMSpySOmSMgUhBHREUVsVFJkrOa7pN/e61p95Bw2toUw0b3MkXDbiI3EAUd47VYYJHXHQmqg0TWm7QX189xCttNBcRqqzvk7wnDJBHIja3Q8s8hzNJaOy07xt6tDNW0uLU/RluJbiP0edZl4MrR5I8jgjIrPy9l9Y4egol+zeiWqJdYu2BM/Ejd5ASpLZ2uMHBwdvIE4twdndUTtBqt9Ld7oLkTCD9JOAHWMIpTby2lW57uWeQ5nDakpZ2KIvp079pItV48fCjtHtuFwzk7mVs7s4HMdMedVL2yg+fbm5+cLeOW708WbwS7S3IkowBPMd5gQRz5c+XMe3ZbVkTs/wLteLZIovGe5kYSPuQuwyMkkB8HK9QCCCQKd32M1S61K+V71lgurqSTdw+JG6PvwGHEU5AcLghh9EmPYJfogGeqOw9nr1bCeBtQWRpLkTLvjYpGu0AouWyoPMgg8ieXLlTbjszqEthpsC6zJx7aJI3umjbjSEMhLAhhjIUgg5Bzk5xgv+ZL1O01tecRZ7SGCGNWkuHV4ygkDkKBht25M5IHLJzgUIh7LdoUs9Zi+cI1nubN4YpRPJ35TNI4lPLuEIyLyz0x0AoWmA9VqNN0prTUtVvpZFZr2VCqquBGqKFA95PMk8uoHlmqVv2eu4ptQZtSXhXMDwrAsR4YLOxDshJBYAgHAXdgk9Rgfp/ZvUrHWpbxblfROJefRLK5PDcR8JcEY5FXOM8t3LOTQ7s7oWv/8Ahl+KyxyXkFl+jXM8uQUAMzMcZV2HLbzGVG7OSKFo16rQJoF36BLbvqHEdrozrxFYrEpXBRTu3KOZIIbkSQOXKr/zbc/+Hl0xr3j3K2wh9Knj4m9gMbmXPPJ6jP2+dZW87Ka7caRZ2p1CPjwWNzDv9JkA4rsphbIAJ2gHnjI8hRhLDUE7VTzxSs1n6Ks/CkZgnpOGjGG5jBUZIAODhsZIzFD+65J2cvX0f0P503S8eWRXkVzwlcMAqHeHXbkEHdnkRyBGO3uh3cs1iy6pIrW6wiSXh4ll2Ek5IIBDAkEEEDJI51z5q1R+1K6nccFoGih7q3MgNuVWQSKqgAOGLp1x4ckZAoHB2Y1+LStTtm1CP0m4s0hjdZ3+klDuTMxxlCQVGBnp15CiFPqtFZ6Pcxa82oem/QbZB6NHGVD7yhBbngkYOCFBO7meXMtqFqt7YT2z/wBZGyK3sJBGazGg9nb/AE/W1vHuV9G3XW5FmdiVd0aIYIxyAbl5Z5ZzWtL0S0OFEIWRyK8w0T5Nm0S5i1G9u+PPGp2rByQEjB3E8zy+FEpR3/7tbxj3O/tVf3q827Wa1BpmttYrBxFmUGJ1kxzOcg5HtB+8UkbHte4k2D7KSEOaNtwrApyeAVUs7tbhOLt4fextZuf5VYP8S/4v9K9C86MN61WdJ/b1/hP5UqVe6T5Cs+L9QK9qf7HP9tZSelSpIflXrk+cKXR/2n+635Cu67+xwfxfypUqqf8AOrm8kAerMH7M320qVApzyVzRf2+L+Ktmn7StKlSvQHMonXKVKqFYu0qVKoolXKVKgolXaVKoglXDSpUVEqVKlUUTWqB6VKmChTvUp8NKlUKDUN139TWE1P8Ab4P7MfmaVKrXfpIN/UUw8f8Ae/lUtKlWb1VxX//Z"/>
        </div>
    );
};

export default BannerImage;