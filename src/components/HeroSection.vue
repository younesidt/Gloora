<template>
    <div class="py-8 px-6 w-full flex items-center justify-center">
        <div class="w-full flex flex-col items-start justify-between bg-bannerImage bg-cover bg-no-repeat min-h-[92vh] bg-center rounded-[45px]">
            <!--FULL NAVBAR-->
            <div class="w-full flex items-center justify-between pt-7 px-10">
                <!--Logo-->
                <div class="w-1/5">
                    <img src="../assets/logo.svg" width="150" alt="gloora">
                </div>
                <!--NavBar-->
                <div class="w-3/5 flex items-center justify-center">
                    <div class="bg-white w-fit flex items-center py-3 text-xl space-x-12 px-12 rounded-full font-Averia">
                        <a href="">Home</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                    </div>
                </div>
                <!-- cart/contact -->
                <div class="w-1/5 flex items-center justify-end">
                    <div class="flex items-center justify-center space-x-5">
                        <div class="flex space-x-2">
                            <a href="" class="relative">
                                <img src="../assets/cart.svg" alt="cart">
                                <div class="absolute top-[-6px] right-0 bg-[#F3A17C] rounded-full w-5 h-5 text-white text-xs text-center font-Averia pt-[1px]">01</div>
                            </a>
                            <a href="">
                                <img src="../assets/liike.svg" alt="like">
                            </a>
                        </div>
                        <button class="border-2 border-black rounded-full px-6 py-3 font-Averia text-xl">Contact</button>
                    </div>
                </div>
            </div>
            <!--TEXT-->
            <div class="w-full flex items-center justify-between px-10 pb-12">
                <div class="w-1/2 flex flex-col items-start">
                    <h1 class="text-white font-bold text-[70px] leading-[74px]">Unlock Your Skin's Natural Beauty</h1>
                    <p class="text-white font-Averia text-[40px] pt-10">Discover the Secret to Flawless Skin</p>
                    <div class="flex items-center space-x-8 pt-12">
                        <a href=""><img src="../assets/left.svg" alt="left"></a>
                        <a href=""><img src="../assets/right.svg" alt="right"></a>
                    </div>
                </div>
                <div class="w-1/2 flex items-center justify-end">
                    <div class="flex space-x-2">
                        <button class="bg-[#000000] font-Averia text-white text-sm py-3 rounded-full px-2">Skin Care</button>
                        <button class="bg-white font-Averia text-black text-sm py-3 rounded-full px-2">Face Care</button>
                        <button class="flex items-center bg-[#F3A17C] text-white text-xs space-x-1 py-3 rounded-full px-2">
                            <span>Buy Now</span> 
                            <img src="../assets/mycart.svg" class="h-4" alt="cart">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>