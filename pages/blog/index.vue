<template>
	<main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
		<div class="mx-auto max-w-lg lg:max-w-7xl">
			<div class="border-b border-b-gray-200 pb-6">
				<h2
					class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
				>
					Recent Posts
				</h2>
			</div>
			<div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-y-12">
				<ContentList path="/blog" v-slot="{ list }">
					<div
						v-for="article in list"
						:key="article._path"
						class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
					>
						<nuxt-link :href="article._path">
							<p class="text-xl text-gray-900">
								{{ article.title }}
							</p>
							<p class="mt-3 text-gray-500">
								{{ article.description }}
							</p>
						</nuxt-link>
					</div>
				</ContentList>
			</div>
		</div>
	</main>
</template>
