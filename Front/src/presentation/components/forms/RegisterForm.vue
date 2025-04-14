<script setup lang="ts"></script>
<template>
    <div>
        <form class="form">
            <p class="title">Sign up</p>
            <p class="message">Sign up to enjoy our app!</p>
            <div class="flex">
                <label>
                    <input class="input" type="text" placeholder="" required="true">
                    <span>First name</span>
                </label>
                <label>
                    <input class="input" type="text" placeholder="" required="true">
                    <span>Last name</span>
                </label>
            </div>
            <label>
                <input class="input" type="email" placeholder="" required="true">
                <span>Email address</span>
            </label>
            <label>
                <input class="input" type="password" placeholder="" required="true">
                <span>Password</span>
            </label>
            <label>
                <input class="input" type="password" placeholder="" required="true">
                <span> Confirm your password</span>
            </label>
            <button class="submit"> Submit</button>
            <p class="signin">Already have an account?<a href="#">Log in</a> </p>
        </form>
    </div>
</template>
<style scoped src="/src/assets/Styles/forms/registerform.css"></style>