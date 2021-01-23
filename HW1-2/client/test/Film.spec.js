import Film from '../src/components/Film.vue'
import {afterEach, describe, it} from "@jest/globals";
import {shallowMount} from "@vue/test-utils";
import flushPromises from 'flush-promises'
import FilmDataService from "../src/services/FilmDataService";

const sinon = require('sinon');

afterEach(() => {
    sinon.restore();
})

describe('Film.vue', () => {
    it('film page without selected film', () => {
            const $route = {params: {id: 0}}

            const wrapper = shallowMount(Film, {
                mocks: {
                    $route
                }
            })

            expect(wrapper.text()).toBe("Please click on a Film...")
        }
    )

    it('film page with selected film', async () => {
        const film = {
            data: {
                id: 0,
                title: "test film",
                description: "description for test film",
                directors: "it's me",
                published: false
            }
        };


        const FilmDataServiceStub = sinon
            .stub(FilmDataService, "get")
            .resolves(film)

        const $route = {params: {id: 0}}

        const wrapper = shallowMount(Film, {
            mocks: {
                $route
            }
        })

        await flushPromises();

        expect(wrapper.html()).toContain("Title")
        expect(wrapper.html()).toContain("Description")
        expect(wrapper.html()).toContain("Directors")
        expect(wrapper.html()).toContain("Status")
    })

    it('update film description', async () => {
        const film = {
            data: {
                id: 0,
                title: "test film",
                description: "description for test film",
                directors: "it's me",
                published: false
            }
        };


        const FilmDataServiceStub = sinon
            .stub(FilmDataService, "get")
            .resolves(film)

        const FilmDataServiceUpdateStub = sinon
            .stub(FilmDataService, "update")
            .resolves(film)

        const $route = {params: {id: 0}}

        const wrapper = shallowMount(Film, {
            mocks: {
                $route
            }
        })

        await flushPromises();

        await wrapper.find('#updateFilm').trigger('click')

        await flushPromises();

        expect(wrapper.vm.message).toBe("The film was updated successfully!")
    })
})

